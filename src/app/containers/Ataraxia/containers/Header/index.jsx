import React from 'react'
import classNames from 'classnames/bind'

// Components
import IconSVG from 'components/IconSVG'

// Styles
import styles from './header.css'

const cx = classNames.bind(styles)

const Header = ({ section, socialNetworks, toggleOpenCloseMenu, isScrollToChangeColorHeader, isScrollToChangeColorNetworks }) => {

  const styleIconClass = cx({
    icon_social: true,
    icon_social_black : ((section !== 'home') || isScrollToChangeColorNetworks)
  })

  const styleHeaderClass = cx({
    container_header: true,
    container_header_black : ((section !== 'home') || isScrollToChangeColorHeader)
  })

  const styleSocialClass = cx({
    container_social: true,
    container_social_black : ((section !== 'home') || isScrollToChangeColorNetworks)
  })

  const networksTag = socialNetworks.map((item, index) => {
    return (
      <a 
        key={ index }
        className={ (index === 0) ? (`${ styleIconClass } ${ styles.first }`) : (styleIconClass) } 
        href={ item.url } 
        target={ '_blank' }>
        <IconSVG
          type={ 'networks' } 
          icon={ item.network }
          classNames={ styles.iconSVG }              
        />
      </a>
    )
  })

  const shoppingIconTag = (false) ? (
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
  ) : ''

  return (
    <div>
      <div className={ styleHeaderClass }>
        <div className={ styles.bar }>
          <div 
            className={ styles.bar_left }
            onClick={ toggleOpenCloseMenu }           
          >
            <IconSVG
              type={ 'controls' } 
              icon={ 'open' }
              classNames={ styles.icon_menu }    
            />
            <span>MENU</span>
          </div>
          <a className={ styles.container_logo } href={ '/' }>
            <img 
              className={ styles.logo } 
              src={ '/assets/icons/ataraxia/logo.svg' } 
              alt={ 'ΔTΔRΔXIΔ | mainLogo' }              
            />
          </a> 
          { shoppingIconTag }
        </div>
      </div>
      <div className={ styles.container_header_vertical }>
        <div className={ styleSocialClass }>
          { networksTag }
        </div>
      </div>
    </div>
  )
}

export default Header