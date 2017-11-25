import React from 'react'
import { Route } from 'react-router'

import App from 'containers/App/'
import Ataraxia from 'containers/Ataraxia'

const routes = (
  <Route path="/" component={ App } >
    <Route path="/ataraxia" component={ Ataraxia } />
    <Route path="/ataraxia/:section" component={ Ataraxia } /> 
  </Route>
)

export default routes