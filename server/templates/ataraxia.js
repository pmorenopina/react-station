export default function main(params) {

  const state = JSON.stringify(params.state)
  let title = 'ΔTΔRΔXIΔ'
  let scriptMaps, scriptInitMaps = ''

  if (params.routeMatch === '/events/' || params.routeMatch === '/events') {
    title += ' - Eventos'
  } else if (params.routeMatch === '/djs/' || params.routeMatch === '/ataraxia/djs') {
    title += ' - Djs'
  } else if (params.routeMatch === '/media/' || params.routeMatch === '/media') {
    title += ' - Media'
  } else {
    scriptMaps = '<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC1g2Qt-GYi0xpUVkrH_RFB5EX2dr-1dR8"></script>'
    scriptInitMaps = `
    <script>
      function initMapFuction() {
        try {
          var cafeLaPalma = { lat: 40.426857, lng: -3.707992 };
          var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 18,
            center: cafeLaPalma,
            disableDefaultUI: true,
            zoomControl: true,
            scaleControl: true          
          });
          var marker = new google.maps.Marker({
            position: cafeLaPalma,
            map: map,
            draggable: false,
            animation: google.maps.Animation.DROP
          });
          document.getElementById('mapFake').style.display = 'none';
        } catch(err) {
          document.getElementById('mapFake').style.display = 'block';    
        }
      }

      window.initMap = initMapFuction;
    </script>
    `
  }

  return `
  <!doctype html>
	<html lang="utf-8">
    <head>
      <link rev="made" href="mailto:pmorenopina@gmail.com">
      <link rel="manifest" href="/assets/favicon/ataraxia/manifest.json">      
      <link rel="apple-touch-icon" sizes="57x57" href="/assets/favicon/ataraxia/apple-icon-57x57.png">
      <link rel="apple-touch-icon" sizes="72x72" href="/assets/favicon/ataraxia/apple-icon-72x72.png">
      <link rel="apple-touch-icon" sizes="76x76" href="/assets/favicon/ataraxia/apple-icon-76x76.png">
      <link rel="apple-touch-icon" sizes="114x114" href="/assets/favicon/ataraxia/apple-icon-114x114.png">
      <link rel="apple-touch-icon" sizes="120x120" href="/assets/favicon/ataraxia/apple-icon-120x120.png">
      <link rel="apple-touch-icon" sizes="144x144" href="/assets/favicon/ataraxia/apple-icon-144x144.png">
      <link rel="apple-touch-icon" sizes="152x152" href="/assets/favicon/ataraxia/apple-icon-152x152.png">
      <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/ataraxia/apple-icon-180x180.png">
      <link rel="icon" type="image/png" sizes="192x192"  href="/assets/favicon/ataraxia/android-icon-192x192.png">
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/ataraxia/favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="96x96" href="/assets/favicon/ataraxia/favicon-96x96.png">
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/ataraxia/favicon-16x16.png">
      <meta property="og:title" content="${ title }">
      <meta property="og:description" content="Sesión de música electrónica">
      <meta property="og:image" content="/assets/favicon/ataraxia/apple-icon-180x180.png">
      <meta property="og:url" content="http://www.ataraxiaclub.com">
      <meta name="viewport" content="width=device-width" />
      <meta name="msapplication-TileColor" content="#ffffff">
      <meta name="msapplication-TileImage" content="/assets/favicon/ataraxia/ms-icon-144x144.png">
      <meta name="theme-color" content="#ffffff">
      <meta http-equiv="Content-Type" content="text/html; ISO-8859-1">
      <meta name="DC.Language" scheme="RFC1766" content="Spanish">
      <meta name="author" content="Pablo Moreno">
      <meta name="reply-to" content="pmorenopina@gmail.com">
      <meta name="description" content="Sesión de música electrónica">
      <meta name="keywords" content="ataraxia,club,session,sesion,musica,music,ataraxia,techno,deep,house,electronica,electronic,madrid,spain,javier,de la vega,rico,martinez,julio,cafe,la palma">
      <meta name="Resource-type" content="Document">
      <meta name="DateCreated" content="Mon, 20 November 2017 17:00:00 GMT+1">
      <meta name="Revisit-after" content="7 days">
      <meta name="robots" content="all">
      <title>${ title }</title>
      ${ params.vendorScript }
      ${ params.style }
    </head>
    <body>
      <div id="root">${ params.container }</div>
      ${ scriptInitMaps }      
      ${ scriptMaps } 
      <script>window.$REACTBASE_STATE = ${ state }</script>
      ${ params.appScript }
    </body>
  </html>
  `
}
