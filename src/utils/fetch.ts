import { print } from "graphql"
import axios from "axios"
import { TestCase } from "data"
import {
  FetchOption,
  FetchOptionWithHeader,
  RequestHeader,
  RequestOption,
} from "fetch"

export async function fetchData(
  data: TestCase,
  target: FetchOption | FetchOptionWithHeader
) {
  const { query } = data
  const variables = data.variables && data.variables(target.id)

  const hasHeader = (target as FetchOptionWithHeader).header

  const options = { query: print(query), variables }
  const header = hasHeader && {
    headers: {
      Authorization: (target as FetchOptionWithHeader).header,
    },
  }

  try {
    const data = hasHeader
      ? await sendQuery(target.url, options, header)
      : await sendQuery(target.url, options)

    return data
  } catch (error) {
    console.error(error)
  }
}

async function sendQuery(
  target: string,
  option: RequestOption,
  header?: RequestHeader
) {
  const { data } = await axios.post(target, option, header)

  return data
}
