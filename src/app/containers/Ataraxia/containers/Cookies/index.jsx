import React from 'react'

// Styles
import styles from './cookies.css'

const Cookies = () => {
  return (
    <div className={ styles.container_cookies }>
      <div className={ styles.title_container }>
        <div className={ styles.title } >POLÍTICA DE</div>
        <div className={ styles.title } >"COOKIES"</div>
      </div>
      <div className={ styles.description }>
        ¿Qué son las cookies? Una cookie es un fichero que se descarga en tu ordenador, tablet, móvil u otro terminal (en adelante, equipo) cuando accedes a nuestra web. Las cookies nos permiten almacenar y recuperar información sobre tus hábitos de navegación o del equipo desde donde accedes en general de forma anónima y dependiendo de la información que contengan, para reconocerte como usuario o cliente.
        <br/>
        <br/>
        La información que obtienen está relacionada con el número de páginas que visitas, el idioma, el lugar desde el que accedes, el número de nuevos usuarios, la frecuencia y reincidencia de las visitas, el tiempo que dura tu visita, el navegador o el equipo desde el que realizas la visita o ejecutas la aplicación. Qué tipos de cookies utiliza esta página web?
        <br/>
        <br/>
        Cookies propias: Son aquéllas que se envían a tu equipo desde un dominio o equipo gestionado por nosotros.
        <br/>
        Cookies de terceros: Son aquéllas que se envían a tu equipo desde un equipo o dominio que no es gestionado por nosotros, sino por otra entidad que trata los datos obtenidos través de las cookies.
        <br/>
        Cookies de sesión: Son un tipo de cookies que caducan al salir de nuestra web o cerrar la aplicación.
        <br/>
        Cookies persistentes: Son un tipo de cookies que siguen almacenadas en tu equipo durante un periodo de tiempo superior, que puede ser desde unos minutos a varios años.
        <br/>
        Cookies de análisis: Son aquéllas que bien tratadas por nosotros o por terceros, nos permiten cuantificar el número de visitas y el uso que hacen los usuarios de nuestra aplicación con la finalidad de hacer una medición y análisis estadístico de su utilización para corregir las deficiencias que detectemos y facilitar el uso de nuestra web o aplicación.
        <br/>        
        <br/>
        Si lo deseas puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones del navegador instalado en tu ordenador o desde las opciones de privacidad del equipo desde el que nos vistas, en caso que no permitas la instalación de cookies en su navegador es posible que no puedas acceder a alguna de las secciones de nuestra web.
        Por ejemplo, puedes encontrar información sobre cómo hacerlo en el caso que uses como navegador:
        <br/>        
        <br/>
        Firefox desde <a href={ 'http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-web' } target={ '_blank' }>aquí</a>.
        <br/>
        Chrome desde <a href={ 'http://support.google.com/chrome/bin/answer.py?hl=es&answer=95647' } target={ '_blank' }>aquí</a>.
        <br/>
        Explorer desde <a href={ 'http://support.google.com/chrome/bin/answer.py?hl=es&answer=95647' } target={ '_blank' }>aquí</a>.
        <br/>
        Safari desde <a href={ 'http://support.apple.com/kb/ph5042' } target={ '_blank' }>aquí</a>.
        <br/>
        Opera desde <a href={ 'http://help.opera.com/Windows/11.50/es-ES/cookies.html' } target={ '_blank' }>aquí</a>.
        <br/>
        <br/>
        Si lo deseas puedes ver los videos desarrollados por la Agencia Española de Protección de Datos con la finalidad de explicar cómo configurar las opciones de privacidad desde diferentes plataformas y equipos.<a href={ 'http://www.agpd.es/portalwebAGPD/CanalDelCiudadano/protegetuprivacidad/index-ides-idphp.php' } target={ '_blank' }> Aquí</a>
        <br/>
        <br/>
        Cookies propias
        <br/>
        Al utilizar nuestra web se descargan en tu equipo las cookies propias que detallamos a continuación.
        <br/>
        <br/>
        __cfdui: Almacena al usuario para evitar ataques al servicio.
        <br/>
        uuid: Almacena el identificador del usuario para customizar el contenido servido.
        <br/>
        <br/>
        Además si interactúas con el contenido de nuestro Sitio Web también pueden establecerse cookies de terceros (por ejemplo, al pulsar botones de redes sociales o visionar vídeos alojados en otro sitio web). 
        <br/>
        Incluimos a continuación los enlaces los sitios web donde puedes consultar la descripción del tipo de cookies que utilizan las redes sociales a las que puedes acceder desde nuestro Sitio Web y su periodo de expiración:
        <br/>
        <br/>
        Facebook, consultar el siguiente <a href={ 'https://www.facebook.com/policies/cookies' } target={ '_blank' }>enlace</a>.
        <br/>
        Youtube, consultar el siguiente <a href={ 'https://support.google.com/youtube/answer/2801895' } target={ '_blank' }>enlace</a>.
        <br/>
        Instagram, consultar el siguiente <a href={ 'https://www.instagram.co/about/legal/privacy/?hl=es' } target={ '_blank' }>enlace</a>.
        <br/>
        Cloudflare, consultar el siguiente <a href={ 'https://www.cloudflare.com/cookie-policy/' } target={ '_blank' }>enlace</a>.
      </div>
    </div>
  )
}

export default Cookies