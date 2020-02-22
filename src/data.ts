import gql from "graphql-tag"
import { TestCase } from "data"

interface AllTestCase {
  [any: string]: TestCase
}

export const testCase: AllTestCase = {
  monoCreateUser: {
    query: gql`
      mutation createUser(
        $username: String!
        $email: String!
        $password: String!
      ) {
        createUser(username: $username, email: $email, password: $password) {
          status
        }
      }
    `,
    variables(id: number) {
      return {
        username: `test${id}`,
        email: `test${id}@gmail.com`,
        password: `testPasswordFromTest${id}`,
      }
    },
  },
  monoLoginUser: {
    query: gql`
      query login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
          jwt
        }
      }
    `,
    variables(id: number) {
      return {
        username: `test${id}`,
        password: `testPasswordFromTest${id}`,
      }
    },
  },
  monoAddPost: {
    query: gql`
      mutation createPost(
        $title: String!
        $excerpt: String!
        $content: String!
      ) {
        createPost(title: $title, excerpt: $excerpt, content: $content) {
          status
        }
      }
    `,
    variables(id: number) {
      return {
        title: `test ${id}`,
        excerpt: `test ${id}`,
        content: `test ${id}`,
      }
    },
  },
  monoGetAllPost: {
    query: gql`
      query getAllPost {
        getAllPost {
          postid
          postby
          title
          excerpt
          content
        }
      }
    `,
  },
}
