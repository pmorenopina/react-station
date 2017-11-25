import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'containers/App/'
import Ataraxia from 'containers/Ataraxia'

const routes = (
  <Route path="/" component={ App } >
    <IndexRoute component={ Ataraxia } />
    <Route path="/:section" component={ Ataraxia } /> 
  </Route>
)

export default routes