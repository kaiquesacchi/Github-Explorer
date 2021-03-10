import React from 'react'
import { AppProps } from 'next/app'

import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../services/apollo/apolloClient'

import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
import light from '../styles/themes/light'
import Head from 'next/head'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps)

  return (
    <>
      <Head>
        <title>GitHub Explorer</title>
      </Head>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={light}>
          <Component {...pageProps} />
          <GlobalStyle />
        </ThemeProvider>
      </ApolloProvider>
    </>
  )
}

export default MyApp
