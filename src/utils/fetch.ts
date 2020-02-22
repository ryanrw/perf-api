import { print } from "graphql"
import axios from "axios"

import { TestCase } from "data"

interface FetchOption {
  url: string
  id: number
}

interface FetchOptionWithHeader extends FetchOption {
  header: string
}

export async function fetchData(data: TestCase, target: FetchOption) {
  const QUERY = data.query
  const variables = data.variables && data.variables(target.id)
  try {
    const { data } = await axios.post(target.url, {
      query: print(QUERY),
      variables,
    })

    console.log(`Target id ${target.id} successfully`)

    return data
  } catch (error) {
    console.error(error)
  }
}

export async function fetchDataWithHeader(
  data: TestCase,
  target: FetchOptionWithHeader
) {
  const QUERY = data.query
  const variables = data.variables && data.variables(target.id)
  try {
    const { data } = await axios.post(
      target.url,
      {
        query: print(QUERY),
        variables,
      },
      {
        headers: {
          Authorization: target.header,
        },
      }
    )

    console.log(`Target id ${target.id} successfully`)

    return data
  } catch (error) {
    console.error(error)
  }
}
