import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { NavBar } from '../components/NavBar'
const Home = React.lazy(() => import('../pages/Home'))
const Image = React.lazy(() => import('../pages/Image'))
const Video = React.lazy(() => import('../pages/Video'))
const Fetch = React.lazy(() => import('../pages/Fetch'))
const NoMatch = React.lazy(() => import('../pages/NoMatch'))

export const Routes = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/image' component={Image} />
        <Route exact path='/video' component={Video} />
        <Route exact path='/fetch' component={Fetch} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  )
}
