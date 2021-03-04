import { gql } from '@apollo/client'

export const SEARCH_FOR_REPOS = gql`
  query searchForRepos($search_term: String!) {
    search(query: $search_term, type: REPOSITORY, first: 30) {
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
    edges: {
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
    }[]
  }
}
