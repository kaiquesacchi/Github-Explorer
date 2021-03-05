import React from 'react'
import FocusBlock from '../components/FocusBlock/FocusBlock'
import List from '../components/List/List'
import PageLayout from '../components/PageLayout/PageLayout'
import { iLicenses, iCondition, LICENSES } from '../queries/licenses'
import { initializeApollo } from '../services/apollo/apolloClient'
import * as SC from '../styles/pages/licenses'

interface iProps {
  data: iLicenses
}

const renderItem = (item: iCondition) => (
  <SC.ConditionItem>
    <p>{item.label}</p>
  </SC.ConditionItem>
)

export default function Licenses({ data }: iProps) {
  const formattedData: any = Object.fromEntries(
    data.licenses.map(license => [
      `${license.name}` + (license.nickname ? ` (${license.nickname})` : ''),
      license.conditions,
    ])
  )
  return (
    <PageLayout activeTab="licenses">
      <FocusBlock>
        <List<iCondition> data={formattedData} renderItem={renderItem} />
      </FocusBlock>
    </PageLayout>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query<iLicenses>({
    query: LICENSES,
  })
  return {
    props: {
      data,
    },
    revalidate: 60,
  }
}
