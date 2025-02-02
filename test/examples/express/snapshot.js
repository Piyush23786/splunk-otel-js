// a console.log from a previous run
module.exports = [
  {
    traceId: 'A37o7erfuyPYfdRjbMe2vA==',
    id: 'DYBxR3gELtY=',
    startTime: '2022-10-27T16:51:24.726186496Z',
    name: 'GET /all',
    kind: 'server',
    parentSpanId: undefined,
    parent: undefined,
    references: undefined,
    status: { code: undefined },
    attributes: {
      'otel.library.name': '@opentelemetry/instrumentation-http',
      'otel.library.version': '0.33.0',
      'http.url': 'http://app/all',
      'http.host': 'app',
      'net.host.name': 'app',
      'http.method': 'GET',
      'http.scheme': 'http',
      'http.target': '/all',
      'http.user_agent': 'got (https://github.com/sindresorhus/got)',
      'http.flavor': '1.1',
      'net.transport': 'ip_tcp',
      'net.host.ip': '::ffff:192.168.160.3',
      'net.host.port': undefined,
      'net.peer.ip': '::ffff:192.168.160.4',
      'net.peer.port': undefined,
      'http.status_code': undefined,
      'http.status_text': 'OK',
      'http.route': '/all',
      'span.kind': 'server'
    }
  },
  {
    traceId: 'A37o7erfuyPYfdRjbMe2vA==',
    id: 'Vj7bxXPJTJI=',
    startTime: '2022-10-27T16:51:24.739409664Z',
    name: 'middleware - query',
    kind: 'internal',
    parentSpanId: 'DYBxR3gELtY=',
    parent: { id: 'DYBxR3gELtY=', traceId: 'A37o7erfuyPYfdRjbMe2vA==' },
    references: [],
    status: { code: undefined },
    attributes: {
      'otel.library.name': '@opentelemetry/instrumentation-express',
      'otel.library.version': '0.31.2',
      'http.route': '/',
      'express.name': 'query',
      'express.type': 'middleware',
      'span.kind': 'internal'
    }
  },
  {
    traceId: 'A37o7erfuyPYfdRjbMe2vA==',
    id: '0Lpf6uXPUo0=',
    startTime: '2022-10-27T16:51:24.742043136Z',
    name: 'middleware - expressInit',
    kind: 'internal',
    parentSpanId: 'DYBxR3gELtY=',
    parent: { id: 'DYBxR3gELtY=', traceId: 'A37o7erfuyPYfdRjbMe2vA==' },
    references: [],
    status: { code: undefined },
    attributes: {
      'otel.library.name': '@opentelemetry/instrumentation-express',
      'otel.library.version': '0.31.2',
      'http.route': '/',
      'express.name': 'expressInit',
      'express.type': 'middleware',
      'span.kind': 'internal'
    }
  },
  {
    traceId: 'A37o7erfuyPYfdRjbMe2vA==',
    id: 'fb5OkY8fni4=',
    startTime: '2022-10-27T16:51:24.743007488Z',
    name: 'middleware - jsonParser',
    kind: 'internal',
    parentSpanId: 'DYBxR3gELtY=',
    parent: { id: 'DYBxR3gELtY=', traceId: 'A37o7erfuyPYfdRjbMe2vA==' },
    references: [],
    status: { code: undefined },
    attributes: {
      'otel.library.name': '@opentelemetry/instrumentation-express',
      'otel.library.version': '0.31.2',
      'http.route': '/',
      'express.name': 'jsonParser',
      'express.type': 'middleware',
      'span.kind': 'internal'
    }
  },
  {
    traceId: 'A37o7erfuyPYfdRjbMe2vA==',
    id: 'zVl+f/VDp24=',
    startTime: '2022-10-27T16:51:24.744299008Z',
    name: 'request handler - /all',
    kind: 'internal',
    parentSpanId: 'DYBxR3gELtY=',
    parent: { id: 'DYBxR3gELtY=', traceId: 'A37o7erfuyPYfdRjbMe2vA==' },
    references: [],
    status: { code: undefined },
    attributes: {
      'otel.library.name': '@opentelemetry/instrumentation-express',
      'otel.library.version': '0.31.2',
      'http.route': '/all',
      'express.name': '/all',
      'express.type': 'request_handler',
      'span.kind': 'internal'
    }
  },
  {
    traceId: 'A37o7erfuyPYfdRjbMe2vA==',
    id: 'KWFIIp9NloY=',
    startTime: '2022-10-27T16:51:24.751714560Z',
    name: 'HTTP GET',
    kind: 'client',
    parentSpanId: 'DYBxR3gELtY=',
    parent: { id: 'DYBxR3gELtY=', traceId: 'A37o7erfuyPYfdRjbMe2vA==' },
    references: [],
    status: { code: undefined },
    attributes: {
      'otel.library.name': '@opentelemetry/instrumentation-http',
      'otel.library.version': '0.33.0',
      'http.url': 'http://localhost/cats',
      'http.method': 'GET',
      'http.target': '/cats',
      'net.peer.name': 'localhost',
      'http.host': 'localhost:80',
      'http.user_agent': 'axios/0.21.4',
      'net.peer.ip': '127.0.0.1',
      'net.peer.port': undefined,
      'http.response_content_length_uncompressed': undefined,
      'http.status_code': undefined,
      'http.status_text': 'OK',
      'http.flavor': '1.1',
      'net.transport': 'ip_tcp',
      'span.kind': 'client'
    }
  },
  {
    traceId: 'A37o7erfuyPYfdRjbMe2vA==',
    id: 'yozI+WKNHG4=',
    startTime: '2022-10-27T16:51:24.754954752Z',
    name: 'tcp.connect',
    kind: 'internal',
    parentSpanId: 'KWFIIp9NloY=',
    parent: { id: 'KWFIIp9NloY=', traceId: 'A37o7erfuyPYfdRjbMe2vA==' },
    references: [],
    status: { code: undefined },
    attributes: {
      'otel.library.name': '@opentelemetry/instrumentation-net',
      'otel.library.version': '0.30.1',
      'net.transport': 'ip_tcp',
      'net.peer.name': 'localhost',
      'net.peer.port': '80',
      'net.peer.ip': '127.0.0.1',
      'net.host.ip': '127.0.0.1',
      'net.host.port': undefined,
      'span.kind': 'internal'
    }
  },
  {
    traceId: 'A37o7erfuyPYfdRjbMe2vA==',
    id: 'Ca9lQza8grs=',
    startTime: '2022-10-27T16:51:24.758785280Z',
    name: 'HTTP GET',
    kind: 'client',
    parentSpanId: 'DYBxR3gELtY=',
    parent: { id: 'DYBxR3gELtY=', traceId: 'A37o7erfuyPYfdRjbMe2vA==' },
    references: [],
    status: { code: undefined },
    attributes: {
      'otel.library.name': '@opentelemetry/instrumentation-http',
      'otel.library.version': '0.33.0',
      'http.url': 'http://localhost/dogs',
      'http.method': 'GET',
      'http.target': '/dogs',
      'net.peer.name': 'localhost',
      'http.host': 'localhost:80',
      'http.user_agent': 'axios/0.21.4',
      'net.peer.ip': '127.0.0.1',
      'net.peer.port': undefined,
      'http.response_content_length_uncompressed': undefined,
      'http.status_code': undefined,
      'http.status_text': 'OK',
      'http.flavor': '1.1',
      'net.transport': 'ip_tcp',
      'span.kind': 'client'
    }
  },
  {
    traceId: 'A37o7erfuyPYfdRjbMe2vA==',
    id: 'SHlc7snAKW4=',
    startTime: '2022-10-27T16:51:24.759273984Z',
    name: 'tcp.connect',
    kind: 'internal',
    parentSpanId: 'Ca9lQza8grs=',
    parent: { id: 'Ca9lQza8grs=', traceId: 'A37o7erfuyPYfdRjbMe2vA==' },
    references: [],
    status: { code: undefined },
    attributes: {
      'otel.library.name': '@opentelemetry/instrumentation-net',
      'otel.library.version': '0.30.1',
      'net.transport': 'ip_tcp',
      'net.peer.name': 'localhost',
      'net.peer.port': '80',
      'net.peer.ip': '127.0.0.1',
      'net.host.ip': '127.0.0.1',
      'net.host.port': undefined,
      'span.kind': 'internal'
    }
  },
  {
    traceId: 'A37o7erfuyPYfdRjbMe2vA==',
    id: 'CjrHF7BXjOc=',
    startTime: '2022-10-27T16:51:24.764079360Z',
    name: 'GET /cats',
    kind: 'server',
    parentSpanId: 'KWFIIp9NloY=',
    parent: { id: 'KWFIIp9NloY=', traceId: 'A37o7erfuyPYfdRjbMe2vA==' },
    references: [],
    status: { code: undefined },
    attributes: {
      'otel.library.name': '@opentelemetry/instrumentation-http',
      'otel.library.version': '0.33.0',
      'http.url': 'http://localhost/cats',
      'http.host': 'localhost',
      'net.host.name': 'localhost',
      'http.method': 'GET',
      'http.scheme': 'http',
      'http.target': '/cats',
      'http.user_agent': 'axios/0.21.4',
      'http.flavor': '1.1',
      'net.transport': 'ip_tcp',
      'net.host.ip': '::ffff:127.0.0.1',
      'net.host.port': undefined,
      'net.peer.ip': '::ffff:127.0.0.1',
      'net.peer.port': undefined,
      'http.status_code': undefined,
      'http.status_text': 'OK',
      'http.route': '/cats',
      'span.kind': 'server'
    }
  },
  {
    traceId: 'A37o7erfuyPYfdRjbMe2vA==',
    id: '1UHs3q6VN5c=',
    startTime: '2022-10-27T16:51:24.764299520Z',
    name: 'middleware - query',
    kind: 'internal',
    parentSpanId: 'CjrHF7BXjOc=',
    parent: { id: 'CjrHF7BXjOc=', traceId: 'A37o7erfuyPYfdRjbMe2vA==' },
    references: [],
    status: { code: undefined },
    attributes: {
      'otel.library.name': '@opentelemetry/instrumentation-express',
      'otel.library.version': '0.31.2',
      'http.route': '/',
      'express.name': 'query',
      'express.type': 'middleware',
      'span.kind': 'internal'
    }
  },
  {
    traceId: 'A37o7erfuyPYfdRjbMe2vA==',
    id: 'xbW9fDVa5Lw=',
    startTime: '2022-10-27T16:51:24.764512512Z',
    name: 'middleware - expressInit',
    kind: 'internal',
    parentSpanId: 'CjrHF7BXjOc=',
    parent: { id: 'CjrHF7BXjOc=', traceId: 'A37o7erfuyPYfdRjbMe2vA==' },
    references: [],
    status: { code: undefined },
    attributes: {
      'otel.library.name': '@opentelemetry/instrumentation-express',
      'otel.library.version': '0.31.2',
      'http.route': '/',
      'express.name': 'expressInit',
      'express.type': 'middleware',
      'span.kind': 'internal'
    }
  },
  {
    traceId: 'A37o7erfuyPYfdRjbMe2vA==',
    id: 'OXATk91Bl6I=',
    startTime: '2022-10-27T16:51:24.764645632Z',
    name: 'middleware - jsonParser',
    kind: 'internal',
    parentSpanId: 'CjrHF7BXjOc=',
    parent: { id: 'CjrHF7BXjOc=', traceId: 'A37o7erfuyPYfdRjbMe2vA==' },
    references: [],
    status: { code: undefined },
    attributes: {
      'otel.library.name': '@opentelemetry/instrumentation-express',
      'otel.library.version': '0.31.2',
      'http.route': '/',
      'express.name': 'jsonParser',
      'express.type': 'middleware',
      'span.kind': 'internal'
    }
  },
  {
    traceId: 'A37o7erfuyPYfdRjbMe2vA==',
    id: 'Br5XxfvexkA=',
    startTime: '2022-10-27T16:51:24.765060096Z',
    name: 'middleware - authMiddleware',
    kind: 'internal',
    parentSpanId: 'CjrHF7BXjOc=',
    parent: { id: 'CjrHF7BXjOc=', traceId: 'A37o7erfuyPYfdRjbMe2vA==' },
    references: [],
    status: { code: undefined },
    attributes: {
      'otel.library.name': '@opentelemetry/instrumentation-express',
      'otel.library.version': '0.31.2',
      'http.route': '/cats',
      'express.name': 'authMiddleware',
      'express.type': 'middleware',
      'span.kind': 'internal'
    }
  },
  {
    traceId: 'A37o7erfuyPYfdRjbMe2vA==',
    id: 'Zml/NsDezro=',
    startTime: '2022-10-27T16:51:24.765270528Z',
    name: 'router - /cats',
    kind: 'internal',
    parentSpanId: 'CjrHF7BXjOc=',
    parent: { id: 'CjrHF7BXjOc=', traceId: 'A37o7erfuyPYfdRjbMe2vA==' },
    references: [],
    status: { code: undefined },
    attributes: {
      'otel.library.name': '@opentelemetry/instrumentation-express',
      'otel.library.version': '0.31.2',
      'http.route': '/cats',
      'express.name': '/cats',
      'express.type': 'router',
      'span.kind': 'internal'
    }
  },
  {
    traceId: 'A37o7erfuyPYfdRjbMe2vA==',
    id: 'R/0rwl/9zbE=',
    startTime: '2022-10-27T16:51:24.765503744Z',
    name: 'request handler - /',
    kind: 'internal',
    parentSpanId: 'CjrHF7BXjOc=',
    parent: { id: 'CjrHF7BXjOc=', traceId: 'A37o7erfuyPYfdRjbMe2vA==' },
    references: [],
    status: { code: undefined },
    attributes: {
      'otel.library.name': '@opentelemetry/instrumentation-express',
      'otel.library.version': '0.31.2',
      'http.route': '/cats',
      'express.name': '/',
      'express.type': 'request_handler',
      'span.kind': 'internal'
    }
  },
  {
    traceId: 'A37o7erfuyPYfdRjbMe2vA==',
    id: 'UwiolscyTZc=',
    startTime: '2022-10-27T16:51:24.770036480Z',
    name: 'GET /dogs',
    kind: 'server',
    parentSpanId: 'Ca9lQza8grs=',
    parent: { id: 'Ca9lQza8grs=', traceId: 'A37o7erfuyPYfdRjbMe2vA==' },
    references: [],
    status: { code: undefined },
    attributes: {
      'otel.library.name': '@opentelemetry/instrumentation-http',
      'otel.library.version': '0.33.0',
      'http.url': 'http://localhost/dogs',
      'http.host': 'localhost',
      'net.host.name': 'localhost',
      'http.method': 'GET',
      'http.scheme': 'http',
      'http.target': '/dogs',
      'http.user_agent': 'axios/0.21.4',
      'http.flavor': '1.1',
      'net.transport': 'ip_tcp',
      'net.host.ip': '::ffff:127.0.0.1',
      'net.host.port': undefined,
      'net.peer.ip': '::ffff:127.0.0.1',
      'net.peer.port': undefined,
      'http.status_code': undefined,
      'http.status_text': 'OK',
      'http.route': '/dogs',
      'span.kind': 'server'
    }
  },
  {
    traceId: 'A37o7erfuyPYfdRjbMe2vA==',
    id: 'bQoB8lDyAfU=',
    startTime: '2022-10-27T16:51:24.770247168Z',
    name: 'middleware - query',
    kind: 'internal',
    parentSpanId: 'UwiolscyTZc=',
    parent: { id: 'UwiolscyTZc=', traceId: 'A37o7erfuyPYfdRjbMe2vA==' },
    references: [],
    status: { code: undefined },
    attributes: {
      'otel.library.name': '@opentelemetry/instrumentation-express',
      'otel.library.version': '0.31.2',
      'http.route': '/',
      'express.name': 'query',
      'express.type': 'middleware',
      'span.kind': 'internal'
    }
  },
  {
    traceId: 'A37o7erfuyPYfdRjbMe2vA==',
    id: 'ibmTaDpw38Y=',
    startTime: '2022-10-27T16:51:24.770354432Z',
    name: 'middleware - expressInit',
    kind: 'internal',
    parentSpanId: 'UwiolscyTZc=',
    parent: { id: 'UwiolscyTZc=', traceId: 'A37o7erfuyPYfdRjbMe2vA==' },
    references: [],
    status: { code: undefined },
    attributes: {
      'otel.library.name': '@opentelemetry/instrumentation-express',
      'otel.library.version': '0.31.2',
      'http.route': '/',
      'express.name': 'expressInit',
      'express.type': 'middleware',
      'span.kind': 'internal'
    }
  },
  {
    traceId: 'A37o7erfuyPYfdRjbMe2vA==',
    id: 'XHzz333mxDc=',
    startTime: '2022-10-27T16:51:24.770454528Z',
    name: 'middleware - jsonParser',
    kind: 'internal',
    parentSpanId: 'UwiolscyTZc=',
    parent: { id: 'UwiolscyTZc=', traceId: 'A37o7erfuyPYfdRjbMe2vA==' },
    references: [],
    status: { code: undefined },
    attributes: {
      'otel.library.name': '@opentelemetry/instrumentation-express',
      'otel.library.version': '0.31.2',
      'http.route': '/',
      'express.name': 'jsonParser',
      'express.type': 'middleware',
      'span.kind': 'internal'
    }
  },
  {
    traceId: 'A37o7erfuyPYfdRjbMe2vA==',
    id: 'dy/MrRu5/CI=',
    startTime: '2022-10-27T16:51:24.770660608Z',
    name: 'middleware - authMiddleware',
    kind: 'internal',
    parentSpanId: 'UwiolscyTZc=',
    parent: { id: 'UwiolscyTZc=', traceId: 'A37o7erfuyPYfdRjbMe2vA==' },
    references: [],
    status: { code: undefined },
    attributes: {
      'otel.library.name': '@opentelemetry/instrumentation-express',
      'otel.library.version': '0.31.2',
      'http.route': '/dogs',
      'express.name': 'authMiddleware',
      'express.type': 'middleware',
      'span.kind': 'internal'
    }
  },
  {
    traceId: 'A37o7erfuyPYfdRjbMe2vA==',
    id: 'qDhTicerCOg=',
    startTime: '2022-10-27T16:51:24.770804736Z',
    name: 'router - /dogs',
    kind: 'internal',
    parentSpanId: 'UwiolscyTZc=',
    parent: { id: 'UwiolscyTZc=', traceId: 'A37o7erfuyPYfdRjbMe2vA==' },
    references: [],
    status: { code: undefined },
    attributes: {
      'otel.library.name': '@opentelemetry/instrumentation-express',
      'otel.library.version': '0.31.2',
      'http.route': '/dogs',
      'express.name': '/dogs',
      'express.type': 'router',
      'span.kind': 'internal'
    }
  },
  {
    traceId: 'A37o7erfuyPYfdRjbMe2vA==',
    id: 'dhTAM51UHFk=',
    startTime: '2022-10-27T16:51:24.770937088Z',
    name: 'request handler - /',
    kind: 'internal',
    parentSpanId: 'UwiolscyTZc=',
    parent: { id: 'UwiolscyTZc=', traceId: 'A37o7erfuyPYfdRjbMe2vA==' },
    references: [],
    status: { code: undefined },
    attributes: {
      'otel.library.name': '@opentelemetry/instrumentation-express',
      'otel.library.version': '0.31.2',
      'http.route': '/dogs',
      'express.name': '/',
      'express.type': 'request_handler',
      'span.kind': 'internal'
    }
  }
];
