// Libs
import React from 'react'

// Styles
import styles from './shoppinCart.css'

// Header Component Definition
const ShoppingCart = () => {
  return (
    <a 
      className={ styles.container_cart } 
      href={ 'https://dice.fm/event/9xa69-ataraxia-javier-de-la-vega-julio-martnez-yrm-11th-feb-caf-la-palma-madrid-tickets' }
      target={ '_blank' }
    >
      <div className={ styles.backcart }>
        <img 
          className={ styles.cart } 
          src={ '/assets/icons/shopping-cart.svg' } 
          alt={ 'ΔTΔRΔXIΔ | cartLogo' }              
        />
        <span>TICKETS</span>
      </div>
    </a> 
  )
}

export default ShoppingCart