import getJsonLd from 'app/jsonld/ataraxia'

export default function main(params) {

  let title = ''
  if (params.routeMatch === '/events/' || params.routeMatch === '/events') {
    title = 'Eventos | ΔTΔRΔXIΔ - Ataraxia Club'
  } else if (params.routeMatch === '/djs/' || params.routeMatch === '/djs') {
    title = 'Djs | ΔTΔRΔXIΔ - Ataraxia Club'
  } else if (params.routeMatch === '/media/' || params.routeMatch === '/media') {
    title = 'Media | ΔTΔRΔXIΔ - Ataraxia Club'
  } else if (params.routeMatch === '/contact/' || params.routeMatch === '/contact') {
    title = 'Contacto | ΔTΔRΔXIΔ - Ataraxia Club'
  } else if (params.routeMatch === '/cookies/' || params.routeMatch === '/cookies') {
    title = 'Cookies | ΔTΔRΔXIΔ - Ataraxia Club'
  } else if (params.routeMatch === '/' || params.routeMatch === '/') {
    title = 'ΔTΔRΔXIΔ - Ataraxia Club'
  }

  let description = ''
  if (params.routeMatch === '/events/' || params.routeMatch === '/events') {
    description = 'Tickets and events information | ΔTΔRΔXIΔ - Ataraxia Club'
  } else if (params.routeMatch === '/djs/' || params.routeMatch === '/djs') {
    description = 'Learn all the information about our residents | ΔTΔRΔXIΔ - Ataraxia Club'
  } else if (params.routeMatch === '/media/' || params.routeMatch === '/media') {
    description = 'Reportajes visuales sobre nuestro recorrido con todos vosotros | ΔTΔRΔXIΔ - Ataraxia Club'
  } else if (params.routeMatch === '/contact/' || params.routeMatch === '/contact') {
    description = 'Contact information | ΔTΔRΔXIΔ - Ataraxia Club'
  } else if (params.routeMatch === '/cookies/' || params.routeMatch === '/cookies') {
    description = 'Privacy policy and cookie notice | ΔTΔRΔXIΔ - Ataraxia Club'
  } else if (params.routeMatch === '/' || params.routeMatch === '/') {
    description = 'Electronic music session settled in Madrid. Tickets and events information | ΔTΔRΔXIΔ - Ataraxia Club'
  }

  let url = ''
  if (params.routeMatch === '/events/' || params.routeMatch === '/events') {
    url = 'https://ataraxiaclub.com/events/'
  } else if (params.routeMatch === '/djs/' || params.routeMatch === '/djs') {
    url = 'https://ataraxiaclub.com/djs/'
  } else if (params.routeMatch === '/media/' || params.routeMatch === '/media') {
    url = 'https://ataraxiaclub.com/media/'
  } else if (params.routeMatch === '/contact/' || params.routeMatch === '/contact') {
    url = 'https://ataraxiaclub.com/contact/'
  } else if (params.routeMatch === '/cookies/' || params.routeMatch === '/cookies') {
    url = 'https://ataraxiaclub.com/cookies/'
  } else if (params.routeMatch === '/' || params.routeMatch === '/') {
    url = 'https://ataraxiaclub.com/'
  }

  let jsonLD = getJsonLd(params.routeMatch)

  return `
  <!doctype html>
  <html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://opengraphprotocol.org/schema/" xmlns:fb="http://www.facebook.com/2008/fbml">
    <head>
      <title>${ title}</title>

      <meta name="robots" content="index, follow" />
      <meta name="description" content="${ description}" />
      <link rel="canonical" href="${ url}" />

      <meta property="og:locale" content="es_ES" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="${ title}" />
      <meta property="og:description" content="${ description}" />
      <meta property="og:url" content="${ url}" />
      <meta property="og:site_name" content="ΔTΔRΔXIΔ - Ataraxia Club" />
      <meta property="article:publisher" content="https://www.facebook.com/ataraxiaclub/" />
      <meta property="og:image" content="/assets/favicon/ataraxia/apple-icon-180x180.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content="${ description}" />
      <meta name="twitter:title" content="${ title}" />
      <meta name="twitter:image" content="/assets/favicon/ataraxia/apple-icon-180x180.png" /> 
      
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta http-equiv="X-Ua-Compatible" content="IE=edge" />
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

      <!-- Chrome, Firefox OS and Opera -->
      <meta name="theme-color" content="#000000">
      <!-- Windows Phone -->
      <meta name="msapplication-navbutton-color" content="#000000">
      <!-- iOS Safari -->
      <meta name="apple-mobile-web-app-status-bar-style" content="#000000
      
      <link rel="manifest" href="/assets/favicon/ataraxia/manifest.json" />      
      <link rel="apple-touch-icon" sizes="57x57" href="/assets/favicon/ataraxia/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/assets/favicon/ataraxia/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/assets/favicon/ataraxia/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/assets/favicon/ataraxia/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/assets/favicon/ataraxia/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/assets/favicon/ataraxia/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/assets/favicon/ataraxia/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/ataraxia/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192"  href="/assets/favicon/ataraxia/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/ataraxia/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/assets/favicon/ataraxia/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/ataraxia/favicon-16x16.png" /> 

      <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed" rel="stylesheet">

      ${ jsonLD}

      <style type="text/css">
        .bm-cross-button  {
          width: 35px !important;
          height: 35px !important;
          top: 15px !important;
          right: 15px !important;
          cursor: pointer !important;
          @media (min-width: 769px){
            top: 30px !important;
            right: 30px !important;
          }            
        }
      </style>
      ${ params.vendorScript}
      ${ params.style}

      <noscript><img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=2148160295509844&ev=PageView&noscript=1"
      /></noscript>
    </head>
    <body>
      <div id="root">${ params.container}</div>
      ${ params.appScript}
      <div style='display:none;'>Project started by <a href="https://github.com/atSistemas/react-base" title="React-Base">React-Base</a></div>   
      <div style='display:none;'>Using library <a href="https://github.com/negomi/react-burger-menu" title="react-burger-menu">react-burger-menu</a> by negomi</div>         
      <div style='display:none;'>Icons made by <a href="https://www.flaticon.com/authors/google" title="Google">Google</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
      <div style='display:none;'>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
    </body>
  </html>
  `
}  