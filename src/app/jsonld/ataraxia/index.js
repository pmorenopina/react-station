import CONFIG from 'app/containers/Ataraxia/config.json'

export default function getJsonLd(section) {
  let json = null
  switch (section) {
    case '/djs':
    case '/djs/':
      json = `
        <script type='application/ld+json'> 
          {
            "@context": "http://www.schema.org",
            "@type": "person",
            "name": "Javier de la Vega",
            "jobTitle": "Dj, Producer",
            "url": "https://www.facebook.com/javierdelavega.1990",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Madrid",
              "addressRegion": "Madrid",
              "addressCountry": "Spain"
            }
          }
        </script>
        <script type='application/ld+json'> 
        {
          "@context": "http://www.schema.org",
          "@type": "person",
          "name": "Julio MartineZ",
          "jobTitle": "Dj, Producer",
          "url": "",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Madrid",
            "addressRegion": "Madrid",
            "addressCountry": "Spain"
          }
        }
      </script>
      `
      break
    case '/events':
    case '/events/':
      let arrayEvents = CONFIG.events.map((item) => {
        if(item.name) {
          return `
          <script type='application/ld+json'> 
            {
              "@context": "http://www.schema.org",
              "@type": "DanceEvent",
              "name": "${ item.name}",
              "url": "https://ataraxiaclub.com",
              "description": "${ item.description}",
              "startDate": "${ item.date.replace(/\//g, '-')}T23:55",
              "endDate": "${ item.endDate.replace(/\//g, '-')}T03:30",
              "location": {
                "@type": "Place",
                "name": "Cafe La Palma",
                "sameAs": "http://www.cafelapalma.com/",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Calle de la Palma 62",
                  "addressLocality": "Madrid",
                  "addressRegion": "Madrid",
                  "postalCode": "28015",
                  "addressCountry": "Spain"
                }
              }
            }
          </script>
        `
        }
      })

      json = arrayEvents.join("")
      break
    default:
      json = `
        <script type='application/ld+json'> 
          {
            "@context": "http://www.schema.org",
            "@type": "Organization",
            "name": "Ataraxia Club",
            "url": "https://ataraxiaclub.com",
            "logo": "https://ataraxiaclub.com/assets/favicon/ataraxia/apple-icon-180x180.png",
            "image": "https://ataraxiaclub.com/assets/favicon/ataraxia/apple-icon-180x180.png",
            "description": "Electronic music session settled in Madrid. Tickets and events information.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Calle Orense 12-14",
              "addressLocality": "Madrid",
              "addressRegion": "Madrid",
              "postalCode": "28020",
              "addressCountry": "Spain"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "40.4492904",
              "longitude": "-3.6955797"
            },
            "openingHours": "Sa 00:00-06:00"
          }
        </script>
      `
      break
  }

  return json
}