// Libs
import React from 'react'
import { PropTypes } from 'prop-types'
import classNames from 'classnames/bind'

// Components
import IconSVG from 'components/IconSVG'
import ShoppingCart from 'ataraxiaComponents/ShoppingCart'
import SocialNetworks from 'ataraxiaComponents/SocialNetworks'

// Styles
import styles from './header.css'

const cx = classNames.bind(styles)

// Header Component Definition
const Header = ({ colorHeaderBlack, section, shoppingActive, socialNetworks, toggleOpenCloseMenu }) => {
  const styleIconClass = cx({
    icon_social: true,
    black : false
  })

  const styleHeaderClass = cx({
    container_header: true,
    black : ((section !== 'home') || colorHeaderBlack)
  })

  const styleSocialClass = cx({
    container_social: true,
    black : false
  })

  const networksTag = (socialNetworks && socialNetworks.length) ? (
    <SocialNetworks 
      className={ styleIconClass }
      socialNetworks={ socialNetworks }
    />
  ) : null
  const shoppingIconTag = (shoppingActive) ? (<ShoppingCart />) : null

  return (
    <header className={ styles.container }>
      <nav
        key={ 0 }
        className={ styleHeaderClass }
      >
        <div 
          className={ styles.bar_left }
          onClick={ toggleOpenCloseMenu }           
        >
          <IconSVG
            type={ 'controls' } 
            icon={ 'open' }
            className={ styles.icon_menu }    
          />
          <span>MENU</span>
        </div>
        <a 
          className={ styles.container_logo } 
          href={ '/' }
        >
          <img 
            className={ styles.logo } 
            src={ '/assets/icons/ataraxia/logo.svg' } 
            alt={ 'ΔTΔRΔXIΔ - Ataraxia Club | mainLogo' }              
          />
        </a> 
        { shoppingIconTag }
      </nav>
      <nav 
        key={ 1 }
        className={ styles.container_header_vertical } 
      >
        <div className={ styleSocialClass }>
          { networksTag }
        </div>
      </nav>
    </header>
  )
}

// Header PropTypes
Header.protoTypes = {
  colorHeaderBlack: PropTypes.bool, 
  colorNetworksBlack: PropTypes.bool, 
  section: PropTypes.string.isRequired, 
  shoppingActive: PropTypes.bool, 
  socialNetworks: PropTypes.array, 
  toggleOpenCloseMenu: PropTypes.func
}

// Header DefaultProps
Header.defaultProps = {
  colorHeaderBlack: true, 
  colorNetworksBlack: false, 
  shoppingActive: false, 
  socialNetworks: null, 
  toggleOpenCloseMenu: null
}

export default Header