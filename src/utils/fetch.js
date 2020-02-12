const { print } = require("graphql")
const axios = require("axios")

const { createQuery, createVariable } = require("./creater")

exports.fetchData = async function fetchData(url) {
  const QUERY = createQuery()
  const variables = createVariable(0)
  try {
    const { data } = await axios.post(url, {
      query: print(QUERY),
      variables,
    })

    console.log(data)
  } catch (error) {
    console.error(error)
  }
}
