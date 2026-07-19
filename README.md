# API Performance: Load Testing

A hands-on performance comparison lab demonstrating the impact of CPU-bound work on API response times and throughput. Compare slow, optimized, and cluster-based server implementations under load.

## Project Overview

This lab shows real-world performance differences between:

- **Slow Version**: An API server that performs blocking CPU work (simulated expensive computation)
- ** Optimised Version**: The same API with the CPU work removed, returning immediately
- **Cluster Version**: A multi-process implementation to leverage all CPU cores
- **Load Testing**: k6 scripts to generate and measure performance under load

## Project Structure

```
api-performance-lab-02-load-testing/
├── slow-version/           # Blocking CPU work in request handler
│   ├── package.json
│   └── server.js          # Runs on port 3000
├── optimized-version/      # Immediate response (no blocking work)
│   ├── package.json
│   └── server.js          # Runs on port 3001
├── cluster-version/        # Multi-process implementation
│   └── ...
├── k6-test/               # Load testing scripts
│   ├── low-load.js        # 10 VUs for 5 seconds
│   └── high-load.js       # High concurrency test
├── results/               # Test results (git-ignored)
└── README.md
```

## Quick Start

### Setup

```bash
# Initialise slow version
cd slow-version
npm init -y
npm install express

# Initialise optimised version  
cd ../optimized-version
npm init -y
npm install express

cd ..
```

### Run Individual Servers

```bash
# Terminal 1: Start slow server (port 3000)
cd slow-version
node server.js

# Terminal 2: Start optimised server (port 3001)
cd optimised-version
node server.js
```

Test endpoints:
- Slow: `http://localhost:3000/api/data`
- Optimised: `http://localhost:3001/api/data`

### Run Load Tests

Install k6 from https://k6.io/docs/getting-started/installation/

```bash
# Low load test (10 virtual users, 5 seconds)
k6 run k6-test/low-load.js

# High load test
k6 run k6-test/high-load.js
```

## What You'll Observe

### Slow Server
- High response times due to CPU blocking (1e8 iterations per request)
- Reduced throughput under load
- Single-threaded: other requests queue up waiting

### Optimized Server
- Minimal response times (immediate JSON response)
- High throughput even under load
- Responsive to concurrent requests

### Performance Metrics to Track
- **Response Time (avg/p95/p99)**: How long requests take
- **Throughput (req/sec)**: How many requests complete per second
- **Error Rate**: Timeouts or failed requests under load

## Learning Goals

✅ Understand how CPU-bound work impacts API performance  
✅ See the difference between blocking and non-blocking implementations  
✅ Learn how to measure performance with load testing (k6)  
✅ Explore scaling strategies (cluster, async, worker threads)  

## Key Takeaways

1. **Never block the event loop** with CPU-intensive work in production APIs
2. **Measure performance** under realistic load conditions
3. **Use profiling tools** to identify bottlenecks
4. **Consider alternatives**: async operations, worker threads, or offloading to background jobs

## Requirements

- Node.js 14+
- npm or yarn
- k6 (for load testing)
