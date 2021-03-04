import React from 'react'
import { AppProps } from 'next/app'

import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../services/apollo/apolloClient'

import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
import light from '../styles/themes/light'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps)

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={light}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default MyApp
