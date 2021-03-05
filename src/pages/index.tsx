import React, { useCallback, useEffect, useState } from 'react'
import * as SC from '../styles/pages/home'

import { FiSearch, FiStar } from 'react-icons/fi'

import { useLazyQuery } from '@apollo/client'

import {
  SEARCH_REPOS_AND_USERS,
  iSearchReposAndUsers,
  iRepoNode,
  iUserNode,
} from '../queries/searchReposAndUsers'
import PageLayout from '../components/PageLayout/PageLayout'
import FocusBlock from '../components/FocusBlock/FocusBlock'
import List from '../components/List/List'

const renderRepoItem = ({ node }: iRepoNode) => (
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

const renderUserItem = ({ node }: iUserNode) => (
  <SC.UserItem>
    <img src={node.avatarUrl} />
    <div className="info">
      <h3>{node.login}</h3>
      <span>{` - ${node.name ?? 'Name is not available.'}`}</span>
      <p>{node.bio ?? 'Biography is not available.'}</p>
      {node.followers?.totalCount > 0 && node.followers.edges && (
        <p>{`Followed by ${node.followers.edges
          .map(follower => follower.node.login)
          .join(', ')} ${
          node.followers.totalCount > 3
            ? ' and ' + (node.followers.totalCount - 3) + ' others'
            : ''
        }`}</p>
      )}
    </div>
  </SC.UserItem>
)

export default function Home() {
  const [input, setInput] = useState('')
  const [
    searchRepos,
    { data, loading, error },
  ] = useLazyQuery<iSearchReposAndUsers>(SEARCH_REPOS_AND_USERS)

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
          data={{ Repositories: data?.repos.edges || [] }}
          renderItem={renderRepoItem}
        />
        <List<iUserNode>
          data={{ Users: data?.users.edges || [] }}
          renderItem={renderUserItem}
        />
      </FocusBlock>
    </PageLayout>
  )
}
