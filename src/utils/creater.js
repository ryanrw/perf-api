const gql = require("graphql-tag")

exports.createQuery = function createQuery() {
  const QUERY = gql`
    mutation createUser(
      $username: String!
      $email: String!
      $password: String!
    ) {
      createUser(username: $username, email: $email, password: $password) {
        status
      }
    }
  `

  return QUERY
}

exports.createVariable = function createVariable(id) {
  const VARIABLE = {
    username: `test${id}`,
    email: `test${id}@gmail.com`,
    password: `testPasswordFromTest${id}`,
  }

  return VARIABLE
}
