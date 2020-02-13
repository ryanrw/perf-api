import { performance } from "perf_hooks"
import { observer, data } from "./utils/getObserver"
import { fetchData } from "./utils/fetch"

observer.observe({ entryTypes: ["measure"] })

async function runTest() {
  for (let id = 0; id < 10; id++) {
    const currentID = id.toString()
    const finish = `Finish`

    const target = { url: "http://localhost:4200", id }

    performance.mark(currentID)

    await fetchData(target)

    performance.mark(finish)

    performance.measure(`${currentID} to ${finish}`, currentID, finish)
  }

  console.log(data)
}

runTest()
