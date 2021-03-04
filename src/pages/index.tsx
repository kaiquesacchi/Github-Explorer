import React, { useState } from 'react'
import * as SC from '../styles/pages/home'

import { FiSearch } from 'react-icons/fi'

import { useLazyQuery } from '@apollo/client'
import {
  APOLLO_STATE_PROP_NAME,
  initializeApollo,
} from '../services/apollo/apolloClient'

import { SEARCH_FOR_REPOS, iSearchForRepos } from '../queries/searchForRepos'
import PageLayout from '../components/PageLayout/PageLayout'
import FocusBlock from '../components/FocusBlock/FocusBlock'

export default function Home() {
  const [input, setInput] = useState('')
  const [searchRepos, { data, loading, error }] = useLazyQuery<iSearchForRepos>(
    SEARCH_FOR_REPOS
  )

  return (
    <PageLayout activeTab="search">
      <FocusBlock>
        <SC.SearchBox>
          <SC.SearchInput
            placeholder="Search for users and repositories"
            value={input}
            onChange={e => {
              setInput(e.target.value)
            }}
          />
          <SC.SearchButton>
            <FiSearch />
          </SC.SearchButton>
        </SC.SearchBox>
        {data?.search.edges.map((item, index) => (
          <p key={index}>{`${item.node.name} - ${item.node.owner.login}`}</p>
        ))}
      </FocusBlock>
    </PageLayout>
  )
}

export const getServerSideProps = async () => {
  const apolloClient = initializeApollo()
  await apolloClient.query({
    query: SEARCH_FOR_REPOS,
    variables: {
      search_term: 'Stocker',
    },
  })
  return { props: { [APOLLO_STATE_PROP_NAME]: apolloClient.cache.extract() } }
}
