import React from 'react'
import cookies from 'browser-cookies'

// Styles
import styles from './cookies.css'

const Cookies = () => {
  const denyCookies = () => {
    let allCookies = cookies.all()

    for (let cookieName in allCookies) {
      if (allCookies.hasOwnProperty(cookieName)) {
        cookies.erase(cookieName)
      }
    }

  }

  return (
    <div className={ styles.container_cookies }>
      <div className={ styles.title_container }>
        <div className={ styles.title } >POLÍTICA DE</div>
        <div className={ styles.title } >"COOKIES"</div>
      </div>
      <div className={ styles.description }>
        ¿Deseas denegar las cookies de tu navegador para este sitio web?
        <br />
        <button
          onClick={ () => denyCookies() }
          className={ styles.deny }
        >
          Denegar cookies
        </button>
        <br />
        <br />
        ¿Qué son las cookies? Una cookie es un fichero que se descarga en tu ordenador, tablet, móvil u otro terminal (en adelante, equipo) cuando accedes a nuestra web. Las cookies nos permiten almacenar y recuperar información sobre tus hábitos de navegación o del equipo desde donde accedes en general de forma anónima y dependiendo de la información que contengan, para reconocerte como usuario o cliente.
        <br />
        <br />
        La información que obtienen está relacionada con el número de páginas que visitas, el idioma, el lugar desde el que accedes, el número de nuevos usuarios, la frecuencia y reincidencia de las visitas, el tiempo que dura tu visita, el navegador o el equipo desde el que realizas la visita o ejecutas la aplicación. Qué tipos de cookies utiliza esta página web?
        <br />
        <br />
        Cookies propias: Son aquéllas que se envían a tu equipo desde un dominio o equipo gestionado por nosotros.
        <br />
        Cookies de terceros: Son aquéllas que se envían a tu equipo desde un equipo o dominio que no es gestionado por nosotros, sino por otra entidad que trata los datos obtenidos través de las cookies.
        <br />
        Cookies de sesión: Son un tipo de cookies que caducan al salir de nuestra web o cerrar la aplicación.
        <br />
        Cookies persistentes: Son un tipo de cookies que siguen almacenadas en tu equipo durante un periodo de tiempo superior, que puede ser desde unos minutos a varios años.
        <br />
        Cookies de análisis: Son aquéllas que bien tratadas por nosotros o por terceros, nos permiten cuantificar el número de visitas y el uso que hacen los usuarios de nuestra aplicación con la finalidad de hacer una medición y análisis estadístico de su utilización para corregir las deficiencias que detectemos y facilitar el uso de nuestra web o aplicación.
        <br />
        <br />
        Al utilizar nuestra web y aceptar el consentimiento se descargan en tu equipo las cookies propias que detallamos a continuación.
        <br />
        Cookies propias
        <br />
        _uuid: Almacena el identificador random del usuario, para conocer si ha aceptado elconsentimiento de cookies.
        <br />
        __cfduid: Se utiliza para identificar clientes detrás de una dirección IP compartida y aplicar configuraciones de seguridad al cliente.
        <br />
        <br />
        Cookies de terceros
        <br />
        Cloudflare:
        <br />
        __cfduid: Se utiliza para identificar clientes detrás de una dirección IP compartida y aplicar configuraciones de seguridad al cliente.
        <br />
        Snapwidget:
        <br />
        __cfduid: Se utiliza para identificar clientes detrás de una dirección IP compartida y aplicar configuraciones de seguridad al cliente.
        <br />
        _ga: Asigna al visitante un ID único que se utiliza para seguir el uso del sitio web.
        <br />
        _gid: Registra una identificación única utilizada para rastrear estadísticas sobre cómo el visitante usa el sitio web.
        <br />
        <br />
        Además si interactúas con el contenido de nuestro Sitio Web también pueden establecerse cookies de terceros (por ejemplo, al pulsar botones de redes sociales o visionar vídeos alojados en otro sitio web).
        <br />
        Incluimos a continuación los enlaces los sitios web donde puedes consultar la descripción del tipo de cookies que utilizan las redes sociales a las que puedes acceder desde nuestro Sitio Web y su periodo de expiración:
        <br />
        <br />
        Facebook, consultar el siguiente <a href={ 'https://www.facebook.com/policies/cookies' } target={ '_blank' }>enlace</a>.
        <br />
        Youtube, consultar el siguiente <a href={ 'https://support.google.com/youtube/answer/2801895' } target={ '_blank' }>enlace</a>.
        <br />
        Instagram, consultar el siguiente <a href={ 'https://www.instagram.co/about/legal/privacy/?hl=es' } target={ '_blank' }>enlace</a>.
      </div>
    </div>
  )
}

export default Cookies