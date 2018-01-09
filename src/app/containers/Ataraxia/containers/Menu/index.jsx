import React from 'react'

// Components
import { elastic as Menu } from 'react-burger-menu'

// Styles
import styles from './menu.css'



const BurgerMenu = ({ isMenuOpen, handlerBugerMenuState, contactInfo, menuItems, socialNetworks }) => {

  let stylesMenu = {
    bmMenuWrap: {
      height: '100vh'
    }
  }

  const menuItemTag = menuItems.map((item, index) => {
    return (
      <a 
        key={ index }
        href={ item.url }
      >
        <img
          src={ item.icon } 
          alt={ `ΔTΔRΔXIΔ | ${ item.title.toLowerCase() }Icon` }              
        />
        <span>{ item.title }</span>
      </a>
    )
  })

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
    <Menu 
      styles={ stylesMenu }
      isOpen={ isMenuOpen }
      customBurgerIcon={ false }
      customCrossIcon={ <img src={ '/assets/icons/close.svg' } /> }
      pageWrapId={ "page-wrap" } 
      outerContainerId={ "outer-container" } 
      menuClassName={ styles.bm_menu }
      onStateChange={ handlerBugerMenuState }
    >
      { menuItemTag }
      <div className={ styles.container_logo }>
        <img 
          className={ styles.logo } 
          src={ '/assets/icons/ataraxia/logo.svg' } 
          alt={ 'ΔTΔRΔXIΔ | mainLogo' }              
        />
      </div>
      <div className={ styles.container_networks }>
        { networksTag }
      </div>
      <div className={ styles.container_text }>
        { contactInfo.email }
      </div>
    </Menu>
  )
}

export default BurgerMenu