import { gql } from '@apollo/client'

export const LICENSES = gql`
  query licenses {
    licenses {
      name
      nickname
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
    conditions: iCondition[]
  }[]
}

export interface iCondition {
  label: string
}
