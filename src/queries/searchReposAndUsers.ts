import { gql } from '@apollo/client'

export const SEARCH_REPOS_AND_USERS = gql`
  query searchReposAndUsers($searchTerm: String!) {
    repos: search(query: $searchTerm, type: REPOSITORY, first: 10) {
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
    users: search(query: $searchTerm, type: USER, first: 10) {
      userCount
      edges {
        node {
          ... on User {
            avatarUrl
            name
            login
            bio
            followers(first: 3) {
              totalCount
              edges {
                node {
                  login
                }
              }
            }
          }
        }
      }
    }
  }
`

export interface iSearchReposAndUsers {
  repos: {
    repositoryCount: number
    edges: iRepoNode[]
  }
  users: {
    userCount: number
    edges: iUserNode[]
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

export interface iUserNode {
  node: {
    avatarUrl: string
    name: string
    login: string
    bio: string
    followers: {
      totalCount: number
      edges: {
        node: {
          login: string
        }
      }[]
    }
  }
}
