const { PerformanceObserver, performance } = require("perf_hooks")

exports.getObserver = function getObserver() {
  const observer = new PerformanceObserver(items => {
    console.log(items.getEntries())
    performance.clearMarks()
  })

  return observer
}
