import { match } from 'react-router'

import { fetchRequiredActions, context } from 'base'
import routes from '../../src/base/routes'
import renderPage from '../lib/renderPage'
import renderContainer from '../lib/renderContainer'

export default function routingMiddleware(req, res) {

  match({ routes , location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) return res.status(500).send(error.message)
    if (redirectLocation) return res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    if (renderProps == null) return res.status(404).send('Not found')
    fetchRequiredActions(null, renderProps.components, renderProps.params, context.context)
      .then(() => {
        const routeMatch = renderProps.location.pathname
        const renderedContainer = renderContainer(renderProps)
        const page = renderPage(routeMatch, renderedContainer)
        return res.status(200).send(page)
      })
      .catch(err => res.end(err.message))
  })
}