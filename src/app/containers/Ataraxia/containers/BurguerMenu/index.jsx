import React from 'react'

// Components
import { elastic as Menu } from 'react-burger-menu'
import IconSVG from '../IconSVG'

// Styles
import styles from './menu.css'



const BurgerMenu = ({ isMenuOpen, handlerBugerMenuState, contactInfo, menuItems, socialNetworks, section }) => {

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
        className={ (section === item.title.toLowerCase().replace(/'/g, '')) ? styles.active : '' }
      >
        <IconSVG
          type={ 'menu' } 
          icon={ item.title.toLowerCase().replace(/'/g, '') }
          classNames={ styles.iconSVG }              
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
      <div className={ styles.container_icon }>
        <img 
          alt={ 'ΔTΔRΔXIΔ | mainLogo' }              
          src={ '/assets/images/ataraxia/ataraxia.png' } 
        />
      </div>
      <div className={ styles.container_menu_items }>
        { menuItemTag }
      </div> 
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