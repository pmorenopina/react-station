// Libs
import React from 'react'

// Styles
import styles from './shoppinCart.css'

// Header Component Definition
const ShoppingCart = () => {
  return (
    <a 
      className={ styles.container_cart } 
      href={ '/events/' }
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