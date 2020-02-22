import { performance } from "perf_hooks"
import { observer } from "../utils/observer"
import { fetchData } from "../utils/fetch"
import { testCase } from "../data"

observer.observe({ entryTypes: ["measure"] })

async function runSingleTest(id: number) {
  const createUserCase = testCase.monoCreateUser

  performance.mark(id.toString())

  await fetchData(createUserCase, { url: "http://localhost:4200", id })

  performance.mark("finish")

  performance.measure(`${id} to finish`, id.toString(), `finish`)
}

runSingleTest(0)
