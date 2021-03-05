import { useQuery } from '@apollo/client'
import React from 'react'
import FocusBlock from '../components/FocusBlock/FocusBlock'
import PageLayout from '../components/PageLayout/PageLayout'
import { iMyProfile, MY_PROFILE } from '../queries/myProfile'
import {
  APOLLO_STATE_PROP_NAME,
  initializeApollo,
} from '../services/apollo/apolloClient'

import * as SC from '../styles/pages/myProfile'

export default function MyProfile() {
  const { data, loading, error } = useQuery<iMyProfile>(MY_PROFILE)
  console.log(data)
  return (
    <PageLayout activeTab="myProfile">
      <FocusBlock>
        <SC.BasicInfo>
          <SC.Avatar src={data?.viewer.avatarUrl} />
          <div className="info">
            <h2>{data?.viewer.name}</h2>
            <h3>{data?.viewer.login}</h3>
            <h3>{data?.viewer.email}</h3>
          </div>
        </SC.BasicInfo>
        <SC.SecondaryInfo>
          <h2>Biography</h2>
          <p>
            {data?.viewer.bio && data?.viewer.bio.length > 0
              ? data?.viewer.bio
              : 'Not available.'}
          </p>
          {data?.viewer.followers.totalCount &&
            data?.viewer.followers.totalCount > 0 &&
            data?.viewer.followers.nodes && (
              <SC.Followers>{`Followed by ${data?.viewer.followers.nodes
                .map(follower => follower.login)
                .join(', ')} ${
                data?.viewer.followers.totalCount > 3
                  ? ' and ' + (data.viewer.followers.totalCount - 3) + ' others'
                  : ''
              }`}</SC.Followers>
            )}
        </SC.SecondaryInfo>
      </FocusBlock>
    </PageLayout>
  )
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()
  await apolloClient.query({
    query: MY_PROFILE,
  })

  return { props: { [APOLLO_STATE_PROP_NAME]: apolloClient.cache.extract() } }
}
