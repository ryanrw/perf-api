import { performance } from "perf_hooks"
import { observer } from "../utils/observer"
import { fetchData, fetchDataWithHeader } from "../utils/fetch"
import { testCase } from "../data"

observer.observe({ entryTypes: ["measure"] })

async function runSingleTest(id: number) {
  const loginCase = testCase.monoLoginUser
  const addPostCase = testCase.monoAddPost

  const data = await fetchData(loginCase, { url: "http://localhost:4200", id })

  const { jwt } = data.data.login
  const header = `Bearer ${jwt}`

  performance.mark("start login query")

  const res = await fetchDataWithHeader(addPostCase, {
    url: "http://localhost:4200",
    id,
    header,
  })

  performance.mark("finish")

  console.log(res)

  performance.measure(
    `start login query to finish`,
    `start login query`,
    `finish`
  )
}

runSingleTest(0)
