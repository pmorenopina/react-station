import React from 'react'
import { PropTypes } from 'prop-types'

// Styles
import styles from './cookiesInfo.css'

const CookiesInfo = ({ isCookieInfoOpen, cookiesAccepted, cookiesCanceled }) => {

  const cookiesInfoTag = (isCookieInfoOpen) ? (
    <div className={ styles.contanier_cookieInfo }>
      <div className={ styles.container }>
        <span>Las cookies nos ayudan a personalizar la navegación especialmente para ti y algunas son imprescindibles para que nuestro sitio web funcione. Las cookies también nos permiten mostrar ofertas y promociones personalizadas, tanto dentro como fuera de nuestro sitio web.     
          <a href="/cookies/" 
            target={ "_blank" } 
            className={ styles.moreInfo }
          >
            Más información
          </a>
        </span>
        <a 
          onClick={ () => cookiesCanceled() } 
          className={ styles.cancel }
        >
        Denegar todas las cookies
        </a>
        <a
          onClick={ () => cookiesAccepted() } 
          className={ styles.accept }
        >
          Aceptar
        </a>
      </div>
    </div>
  ) : ''

  return cookiesInfoTag
}

const propTypes= {

}

CookiesInfo.propTypes= propTypes


export default CookiesInfo