// Libs
import React from 'react'

// Styles
import styles from './shoppinCart.css'

// Header Component Definition
const ShoppingCart = () => {
  return (
    <a 
      className={ styles.container_cart } 
      href={ 'https://www.instagram.com/ataraxia_club/' }
      target={ '_blank' }
    >
      <div className={ styles.backcart }>
        <img 
          className={ styles.cart } 
          src={ '/assets/icons/shopping-cart.svg' } 
          alt={ 'ΔTΔRΔXIΔ | cartLogo' }              
        />
        <span>DM INSTAGRAM - TICKETS</span>
      </div>
    </a> 
  )
}

export default ShoppingCart