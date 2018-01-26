import React from 'react'

// Styles
import styles from './footer.css'

const Footer = ({ itemMenu, menuItems, socialNetworks, section }) => {

  const menuItemTag = menuItems.map((item, index) => {
    return (
      <a 
        key={ index }
        className={ (section === item.title.toLowerCase().replace(/'/g, '')) ? styles.active : '' } 
        href={ item.url }
      >
        { item.title }
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

  const byMe = (false) ? (
    <div className={ styles.container_logos }>
      <div className={ styles.text }>By</div>
      <a href="mailto:pmorenopina@gmail.com">
        <img 
          src={ '/assets/images/ataraxia/logo_pmorenopina.png' } 
          alt={ 'ΔTΔRΔXIΔ | MorenoPina' }            
        />
      </a>
    </div>
  ) : ''

  return (
    <div className={ styles.container_footer }>
      <div className={ styles.footer_bar }>
        <div className={ styles.contact }>info@ataraxiaclub.com</div>
        <div className={ styles.container_menu }>
          { menuItemTag }
        </div>
        <div className={ styles.social_networks }>
          { networksTag }
        </div>
      </div>
      { byMe }
    </div>
  )
}

export default Footer