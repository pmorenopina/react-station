import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'containers/App/'
import Main from 'containers/Main/'
import Ataraxia from 'containers/Ataraxia'

const routes = (
  <Route path="/" component={ App } >
    <IndexRoute component={ Main } />
    <Route path="/ataraxia" component={ Ataraxia } />
    <Route path="/ataraxia/:section" component={ Ataraxia } /> 
  </Route>
)

export default routes