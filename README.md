# Benchmark

가장 좋은 성능을 내는 프레임워크들의 조합을 찾아봅니다.

## 도구

- [bombardier](https://github.com/codesenberg/bombardier)

```sh
./bombardier -c 125 -n 1000000 -m POST -H 'Content-Type: application/json' -b '{"query":"{\n  blogs(input: {dummy1: \"\", dummy2: \"\", dummy3: \"\"}) {\n    id\n    title\n    content\n    createdAt\n    updatedAt\n  }\n}"}' http://localhost:3000/graphql
```

> 125명이 총 1백만번 요청을 완료할때까지 시간이 얼마나 걸리는가?

## 결과

<img width="848" alt="image" src="https://github.com/rhea-so/benchmark/assets/25793226/3499e762-6584-4990-9249-1d3d3c65439b">

### Express Apollo Sequelize

```
Statistics        Avg      Stdev        Max
  Reqs/sec      3033.98     371.77    4298.86
  Latency       41.20ms     4.33ms   258.08ms
  HTTP codes:
    1xx - 0, 2xx - 1000000, 3xx - 0, 4xx - 0, 5xx - 0
    others - 0
  Throughput:    49.10MB/s
```

### Express Apollo Sequelize (의존성 최신버전으로)

```
Statistics        Avg      Stdev        Max
  Reqs/sec      3009.62     351.41    4898.78
  Latency       41.53ms     1.85ms   170.52ms
  HTTP codes:
    1xx - 0, 2xx - 1000000, 3xx - 0, 4xx - 0, 5xx - 0
    others - 0
  Throughput:    48.69MB/s
```

### Fastify Apollo Sequelize

```
Statistics        Avg      Stdev        Max
  Reqs/sec      3725.04     475.43    6364.50
  Latency       33.56ms     2.30ms   188.41ms
  HTTP codes:
    1xx - 0, 2xx - 1000000, 3xx - 0, 4xx - 0, 5xx - 0
    others - 0
  Throughput:    60.03MB/s
```

### Fastify Mercurius Sequelize

```
Statistics        Avg      Stdev        Max
  Reqs/sec      4868.83     576.32    6324.58
  Latency       25.67ms     1.66ms   112.78ms
  HTTP codes:
    1xx - 0, 2xx - 1000000, 3xx - 0, 4xx - 0, 5xx - 0
    others - 0
  Throughput:    78.34MB/s
```
