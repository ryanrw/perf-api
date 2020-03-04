export interface FetchOption {
  url: string
  id: number
}

export interface FetchOptionWithHeader extends FetchOption {
  header: string
}

interface RequestOption {
  query: string
  variables: object
}

interface RequestHeader {
  headers: {
    Authorization: string
  }
}
