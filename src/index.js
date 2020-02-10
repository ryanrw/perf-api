const { PerformanceObserver, performance } = require("perf_hooks")

async function doSomeLongRunningProcess() {

  for (let i = 0; i < 1000000; i++) {
    continue
  }
}

function observer() {
  const obs = new PerformanceObserver(items => {
    console.log(items.getEntries())
    performance.clearMarks()
  })

  return obs
}

const obs = observer()

obs.observe({ entryTypes: ["measure"] })

performance.mark("A")
doSomeLongRunningProcess(() => {
  performance.mark("B")
  performance.measure("A to B", "A", "B")
})

performance.mark("C")
doSomeLongRunningProcess().then(() => {
  performance.mark("D")
  performance.measure("C to D", "C", "D")
})

performance.mark("E")
doSomeLongRunningProcess().then(() => {
  performance.mark("F")
  performance.measure("E to F", "E", "F")
})
