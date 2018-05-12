import React from 'react'
import IconSVG from '../../containers/Ataraxia/containers/IconSVG'
import { PropTypes } from 'prop-types'

// Styles
import styles from './cookiesInfo.css'

const CookiesInfo = ({ isCookieInfoOpen, cookiesAccepted, cookiesCanceled }) => {

  const cookiesInfoTag = (isCookieInfoOpen) ? (
    <div className={ styles.contanier_cookieInfo }>
      <span>Este sitio utiliza cookies y otras tecnologías de seguimiento para ayudar con la navegación y su capacidad para proporcionar comentarios, analizar el uso de nuestros productos y servicios, ayudar con nuestros esfuerzos promocionales y de marketing, y proporcionar contenido de terceros.      
        <a href="/cookies/" 
          target={ "_blank" } 
          className={ styles.moreInfo }
        >
          Más información
        </a>
      </span>
      <a
        onClick={ () => cookiesAccepted() } 
        className={ styles.accept }
      >
        Aceptar
      </a>
      <a
        onClick={ () => cookiesCanceled() } 
      >
        <IconSVG
          type={ 'controls' } 
          icon={ 'close' }
          classNames={ styles.iconCloseSVG }              
        />
      </a>
    </div>
  ) : ''

  return cookiesInfoTag
}

const propTypes= {

}

CookiesInfo.propTypes= propTypes


export default CookiesInfo