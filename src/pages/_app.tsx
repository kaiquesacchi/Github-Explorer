import React from 'react'
import { AppProps } from 'next/app'

import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../services/apollo/apolloClient'

import GlobalStyle from '../styles/global'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps)

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ApolloProvider>
  )
}

export default MyApp
