import * as templates from '../templates/'
import { getScripts, getStyles } from '../lib/files'

export default function renderPage(routeMatch, container) {

  const params = {
    title: params,
    container: container,
    routeMatch: routeMatch,
    style: getStyles('app'),
    appScript: getScripts('app'),
    vendorScript: getScripts('vendor')
  }

  let template
  let route = routeMatch.substring(1).split('/')
  if (route.length >= 0) template = templates[route[0]]

  if (routeMatch === '/' || !template) return templates.ataraxia(params)
  else return template(params)
}