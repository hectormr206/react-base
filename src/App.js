import React, { Suspense } from 'react'
import { GlobalStyle } from './styles/GlobalStyle'
import { Routes } from './routes'

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GlobalStyle />
      <Routes />
    </Suspense>
  )
}
