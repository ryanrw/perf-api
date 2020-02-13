import gql from "graphql-tag"

export function createQuery() {
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

export function createVariable(id: number) {
  const VARIABLE = {
    username: `test${id}`,
    email: `test${id}@gmail.com`,
    password: `testPasswordFromTest${id}`,
  }

  return VARIABLE
}
