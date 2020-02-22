import { DocumentNode } from "graphql"

export interface Data {
  name: string
  duration: number
}

export interface TestCase {
  query: DocumentNode
  variables?: (id: number) => object
}
