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
const Header = ({ colorHeaderBlack, colorNetworksBlack, section, shoppingActive, socialNetworks, toggleOpenCloseMenu }) => {
  const styleIconClass = cx({
    icon_social: true,
    black : ((section !== 'home') || colorNetworksBlack)
  })

  const styleHeaderClass = cx({
    container_header: true,
    black : ((section !== 'home') || colorHeaderBlack)
  })

  const styleSocialClass = cx({
    container_social: true,
    black : ((section !== 'home') || colorNetworksBlack)
  })

  const networksTag = (socialNetworks && socialNetworks.length) ? (
    <SocialNetworks 
      className={ styleIconClass }
      socialNetworks={ socialNetworks }
    />
  ) : null
  const shoppingIconTag = (shoppingActive) ? (<ShoppingCart />) : null

  return ([
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
          alt={ 'ΔTΔRΔXIΔ | mainLogo' }              
        />
      </a> 
      { shoppingIconTag }
    </nav>,
    <nav 
      key={ 1 }
      className={ styles.container_header_vertical } 
    >
      <div className={ styleSocialClass }>
        { networksTag }
      </div>
    </nav>
  ])
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