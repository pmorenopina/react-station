import * as templates from '../templates/';
import { getScripts, getStyles } from '../lib/files';

export default function renderPage(routeMatch, container, store) {

  const params = {
    title: params,
    container: container,
    routeMatch: routeMatch,
    state: store.getState(),
    style: getStyles('app'),
    appScript: getScripts('app'),
    vendorScript: getScripts('vendor')
  };

  let template;
  let route = routeMatch.substring(1).split('/');
  if (route.length > 0) template = templates[route[0]];
  else {
    if (route[0] === 'post') template = templates.post;
    else template = templates.tag;
  }

  return template(params)
}
