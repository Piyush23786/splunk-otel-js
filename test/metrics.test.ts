/*
 * Copyright Splunk Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as assert from 'assert';
import * as os from 'os';

import * as utils from './utils';
import { hrtime } from 'process';
import { startMetrics, _setDefaultOptions } from '../src/metrics';

function emptyCounter() {
  return {
    min: 0,
    max: 0,
    average: 0,
    sum: 0,
    count: 0,
  };
}
const emptyGcCounter = () => ({
  collected: emptyCounter(),
  duration: emptyCounter(),
});
const emptyStats = () => ({
  eventLoopLag: emptyCounter(),
  gc: {
    all: emptyGcCounter(),
    scavenge: emptyGcCounter(),
    mark_sweep_compact: emptyGcCounter(),
    incremental_marking: emptyGcCounter(),
    process_weak_callbacks: emptyGcCounter(),
  },
});

describe('metrics', () => {
  describe('native counters collection', () => {
    const nativeStats = require('../src/metrics/native');

    it('is possible to get native counters', done => {
      const stats = nativeStats.collect();
      assert.deepStrictEqual(stats, emptyStats());

      nativeStats.start();

      setTimeout(() => {
        assert.notDeepStrictEqual(nativeStats.collect(), stats);
        done();
      }, 10);
    });

    it('is possible to reset native counters', () => {
      nativeStats.reset();
      assert.deepStrictEqual(nativeStats.collect(), emptyStats());
    });

    it('does not compute event loop lag to be less than the actual execution time', done => {
      nativeStats.reset();
      const begin = hrtime();

      let duration = hrtime(begin);

      // Spin for 10ms
      while (duration[0] < 1 && duration[1] < 10_000_000) {
        duration = hrtime(begin);
      }

      setTimeout(() => {
        const stats = nativeStats.collect();
        assert(
          stats.eventLoopLag.max >= duration[1],
          `event loop max below actual execution duration max=${stats.eventLoopLag.max} exec=${duration}`
        );
        done();
      }, 10);
    });
  });

  describe('options', () => {
    beforeEach(utils.cleanEnvironment);
    after(utils.cleanEnvironment);

    it('has expected defaults', () => {
      const options = _setDefaultOptions();
      assert.deepEqual(options.enabled, false);
      assert.deepEqual(options.accessToken, '');
      assert.deepEqual(options.endpoint, 'http://localhost:9943');
      assert.deepEqual(options.exportInterval, 5000);

      const sfxClient = options.sfxClient;
      assert.deepStrictEqual(sfxClient['globalDimensions'], {
        host: os.hostname(),
        metric_source: 'splunk-otel-js',
        node_version: process.versions.node,
      });
    });

    it('is possible to set options via env vars', () => {
      process.env.SPLUNK_ACCESS_TOKEN = 'foo';
      process.env.SPLUNK_METRICS_ENABLED = 'true';
      process.env.SPLUNK_METRICS_ENDPOINT = 'http://localhost:9999';
      process.env.SPLUNK_METRICS_EXPORT_INTERVAL = '1000';

      const options = _setDefaultOptions();
      assert.deepEqual(options.enabled, true);
      assert.deepEqual(options.accessToken, 'foo');
      assert.deepEqual(options.endpoint, 'http://localhost:9999');
      assert.deepEqual(options.exportInterval, 1000);
    });
  });

  describe('startMetrics', () => {
    it('exports metrics', done => {
      const metric =
        (name: string) =>
        ({ metric }) =>
          metric === name;
      const gcMetric = (name: string) => m =>
        metric(name)(m) && m.dimensions['gctype'] === 'all';
      const { stopMetrics } = startMetrics({
        enabled: true,
        exportInterval: 100,
        signalfx: {
          client: {
            send: report => {
              stopMetrics();
              const gauges = report.gauges;
              const cumulativeCounters = report.cumulative_counters;
              assert(gauges.find(metric('nodejs.memory.heap.total')));
              assert(gauges.find(metric('nodejs.memory.heap.used')));
              assert(gauges.find(metric('nodejs.memory.rss')));
              assert(gauges.find(metric('nodejs.event_loop.lag.max')));
              assert(gauges.find(metric('nodejs.event_loop.lag.min')));

              assert(
                cumulativeCounters.find(gcMetric('nodejs.memory.gc.size'))
              );
              assert(
                cumulativeCounters.find(gcMetric('nodejs.memory.gc.pause'))
              );
              assert(
                cumulativeCounters.find(gcMetric('nodejs.memory.gc.count'))
              );

              done();
            },
          },
        },
      });
    });

    it('does not export metrics when disabled', done => {
      startMetrics({
        exportInterval: 1,
        signalfx: {
          client: {
            send: () => {
              assert(false, 'did not expect metric send to be called');
            },
          },
        },
      });

      setTimeout(() => {
        done();
      }, 30);
    });

    it('returns an undefined SignalFx client when disabled', () => {
      const { getSignalFxClient } = startMetrics();
      const client = getSignalFxClient();
      assert.equal(client, undefined);
    });

    it('is possible to get the current signalfx client', () => {
      const { stopMetrics, getSignalFxClient } = startMetrics({
        enabled: true,
      });
      const client = getSignalFxClient();
      stopMetrics();
      assert(client);
    });
  });
});