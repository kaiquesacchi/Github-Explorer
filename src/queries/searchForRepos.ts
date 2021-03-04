import { gql } from '@apollo/client'

export const SEARCH_FOR_REPOS = gql`
  query searchForRepos($searchTerm: String!) {
    search(query: $searchTerm, type: REPOSITORY, first: 30) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            name
            owner {
              login
            }
            stargazers {
              totalCount
            }
            description
          }
        }
      }
    }
  }
`

export interface iSearchForRepos {
  search: {
    repositoryCount: number
    edges: iRepoNode[]
  }
}

export interface iRepoNode {
  node: {
    name: string
    owner: {
      login: string
    }
    stargazers: {
      totalCount: number
    }
    description: string
  }
}
