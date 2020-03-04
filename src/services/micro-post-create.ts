import { performance } from "perf_hooks"
import { observer } from "../utils/observer"
import { fetchData } from "../utils/fetch"
import { testCase } from "../data"

observer.observe({ entryTypes: ["measure"] })

async function runSingleTest(id: number) {
  const loginCase = testCase.monoLoginUser
  const addPostCase = testCase.monoAddPost

  const response = await fetchData(loginCase, {
    url: "http://localhost:4000",
    id,
  })

  const { jwt } = response.data.login
  const header = `Bearer ${jwt}`

  performance.mark("start login query")

  await fetchData(addPostCase, {
    url: "http://localhost:4000",
    id,
    header,
  })

  performance.mark("finish")

  performance.measure(
    `start login query to finish`,
    `start login query`,
    `finish`
  )
}

runSingleTest(0)
