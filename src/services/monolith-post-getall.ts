import { performance } from "perf_hooks"
import { observer } from "../utils/observer"
import { fetchData } from "../utils/fetch"
import { testCase } from "../data"

observer.observe({ entryTypes: ["measure"] })

async function runSingleTest(id: number) {
  const getAllPostCase = testCase.monoGetAllPost

  performance.mark("start login query")

  const data = await fetchData(getAllPostCase, {
    url: "http://localhost:4200",
    id,
  })

  performance.mark("finish")

  console.log(data)

  performance.measure(
    `start login query to finish`,
    `start login query`,
    `finish`
  )
}

runSingleTest(0)
