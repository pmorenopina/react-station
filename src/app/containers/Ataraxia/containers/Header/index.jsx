import React from 'react'

// Styles
import styles from './header.css'

const Header = ({ socialNetworks, handleMenu }) => {

  const networksTag = socialNetworks.map((item, index) => {
    return (
      <a 
        key={ index }
        className={ (index === 0) ? (`${ styles.icon_social } ${ styles.first }`) : (styles.icon_social) } 
        href={ item.url } 
        target={ '_blank' }>
        <img 
          src={ item.icon }
          alt={ `ΔTΔRΔXIΔ | ${ item.network }Icon` }              
        />
      </a>
    )
  })

  return (
    <div className={ styles.container_header }>
      <div className={ styles.bar }>
        <img 
          className={ styles.icon_menu }  
          src={ '/assets/icons/hamburger_menu.svg' } 
          onClick={ () => handleMenu() } 
          alt={ 'ΔTΔRΔXIΔ | hambugerMenuIcon' }                            
        />
        <div className={ styles.container_social }>
          { networksTag }
        </div>
        <a className={ styles.container_logo } href={ '/' }>
          <img 
            className={ styles.logo } 
            src={ '/assets/icons/ataraxia/logo.svg' } 
            alt={ 'ΔTΔRΔXIΔ | mainLogo' }              
          />
        </a> 
        <a className={ styles.container_cart } href={ '/events/' }>
          <div className={ styles.backcart }>
            <img 
              className={ styles.cart } 
              src={ '/assets/icons/shopping-cart.svg' } 
              alt={ 'ΔTΔRΔXIΔ | cartLogo' }              
            />
            <span>TICKETS</span>
          </div>
        </a> 
      </div>
    </div>
  )
}

export default Header