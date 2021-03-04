import { gql } from '@apollo/client'

export const LICENSES = gql`
  query licenses {
    licenses {
      name
      nickname
      url
      conditions {
        label
      }
    }
  }
`

export interface iLicenses {
  licenses: {
    name: string
    nickname: string
    url: string
    conditions: {
      label: string
    }
  }
}
