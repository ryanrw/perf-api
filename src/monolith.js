const { performance } = require("perf_hooks")
const { getObserver } = require("./utils/getObserver")
const { fetchData } = require("./utils/fetch")

getObserver().observe({ entryTypes: ["measure"] })

performance.mark("A")
fetchData("http://localhost:4200")
performance.mark("B")
performance.measure("A to B", "A", "B")
