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
          alt={ 'ΔTΔRΔXIΔ | HambugerMenuIcon' }                            
        />
        { networksTag }
        <a className={ styles.container_logo } href={ '/' }>
          <img 
            className={ styles.logo } 
            src={ '/assets/icons/ataraxia/logo.svg' } 
            alt={ 'ΔTΔRΔXIΔ | MainLogo' }              
          />
        </a> 
      </div>
    </div>
  )
}

export default Header