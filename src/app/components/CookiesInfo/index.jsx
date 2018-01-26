import React from 'react'
import { PropTypes } from 'prop-types'

// Styles
import styles from './cookiesInfo.css'

const CookiesInfo = ({ isCookieInfoOpen, cookiesAccepted }) => {

  const cookiesInfoTag = (isCookieInfoOpen) ? (
    <div className={ styles.contanier_cookieInfo }>
      <span>Usamos cookies para personalizar su experiencia. Si sigue navegando estará aceptando su uso.</span>
      <a href="/cookies/" 
        target={ "_blank" } 
        className={ `${ styles.info } ${ styles.first }` }
      >
        Más información
      </a>
      <a
        onClick={ () => cookiesAccepted() } 
        className={ styles.info }
      >
        OK
      </a>
    </div>
  ) : ''

  return cookiesInfoTag
}

const propTypes= {

}

CookiesInfo.propTypes= propTypes


export default CookiesInfo