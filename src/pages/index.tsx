import React, { useCallback, useEffect, useState } from 'react'
import * as SC from '../styles/pages/home'

import { FiSearch, FiStar } from 'react-icons/fi'

import { useLazyQuery } from '@apollo/client'
// import {
//   APOLLO_STATE_PROP_NAME,
//   initializeApollo,
// } from '../services/apollo/apolloClient'

import {
  SEARCH_FOR_REPOS,
  iSearchForRepos,
  iRepoNode,
} from '../queries/searchForRepos'
import PageLayout from '../components/PageLayout/PageLayout'
import FocusBlock from '../components/FocusBlock/FocusBlock'
import List from '../components/List/List'

const renderItem = ({ node }: iRepoNode) => (
  <SC.RepoItem>
    <div className="left-side">
      <h3>{node.name}</h3>
      <span>{` - Owned by ${node.owner.login}`}</span>
      <p>{node.description ?? 'Description not provided.'}</p>
    </div>
    <div className="right-side">
      <FiStar />
      <p>{node.stargazers.totalCount}</p>
    </div>
  </SC.RepoItem>
)

export default function Home() {
  const [input, setInput] = useState('')
  const [
    searchRepos,
    { data: repoData, loading, error },
  ] = useLazyQuery<iSearchForRepos>(SEARCH_FOR_REPOS)

  const handleSearch = useCallback(() => {
    searchRepos({
      variables: {
        searchTerm: input,
      },
    })
  }, [input])

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
          <SC.SearchButton onClick={handleSearch}>
            <FiSearch />
          </SC.SearchButton>
        </SC.SearchBox>
        <List<iRepoNode>
          data={{ Repositories: repoData?.search.edges || [] }}
          renderItem={renderItem}
        />
      </FocusBlock>
    </PageLayout>
  )
}

// export const getServerSideProps = async () => {
//   const apolloClient = initializeApollo()
//   await apolloClient.query({
//     query: SEARCH_FOR_REPOS,
//     variables: {
//       searchTerm: 'Stocker',
//     },
//   })
//   return { props: { [APOLLO_STATE_PROP_NAME]: apolloClient.cache.extract() } }
// }
