import { useRouter } from 'next/dist/client/router'
import React from 'react'
import * as SC from './styles'

const tabs = {
  search: {
    title: 'Search',
    path: '/',
  },
  myProfile: {
    title: 'My Profile',
    path: '/myProfile',
  },
  licenses: {
    title: 'Licenses',
    path: '/licenses',
  },
}

interface iProps {
  activeTab: keyof typeof tabs
  children?: React.ReactNode
}

export default function PageLayout({ activeTab, children }: iProps) {
  const router = useRouter()
  const handleRedirect = (tabKey: keyof typeof tabs) => {
    const path = tabs[tabKey].path

    if (path !== router.route) router.replace(path)
  }

  return (
    <SC.Container>
      <SC.AppBar>
        <h1>GitHub Explorer</h1>
        <SC.Tabs>
          {Object.keys(tabs).map((tabKey, index) => (
            <SC.Tab
              key={index}
              active={tabKey === activeTab}
              onClick={() => handleRedirect(tabKey as keyof typeof tabs)}
            >
              {tabs[tabKey as keyof typeof tabs].title}
            </SC.Tab>
          ))}
        </SC.Tabs>
      </SC.AppBar>
      <SC.Content>{children}</SC.Content>
    </SC.Container>
  )
}
