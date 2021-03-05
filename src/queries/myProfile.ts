import { gql } from '@apollo/client'

export const MY_PROFILE = gql`
  query myProfile {
    viewer {
      name
      email
      login
      bio
      avatarUrl
      followers(first: 3) {
        totalCount
        nodes {
          login
        }
      }
    }
  }
`

export interface iMyProfile {
  viewer: {
    name: string
    email: string
    login: string
    bio: string
    avatarUrl: string
    followers: {
      totalCount: number
      nodes: {
        login: string
      }[]
    }
  }
}
