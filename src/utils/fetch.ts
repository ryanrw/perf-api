import { print } from "graphql"
import axios from "axios"

import { createQuery, createVariable } from "./creater"

interface FetchOption {
  url: string
  id: number
}

export async function fetchData(target: FetchOption) {
  const QUERY = createQuery()
  const variables = createVariable(target.id)
  try {
    const { data } = await axios.post(target.url, {
      query: print(QUERY),
      variables,
    })

    console.log(data)
  } catch (error) {
    console.error(error)
  }
}
