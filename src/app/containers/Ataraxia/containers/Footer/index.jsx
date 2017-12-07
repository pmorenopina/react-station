import React from 'react'

// Styles
import styles from './footer.css'

const Footer = ({ socialNetworks, section }) => {

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
    <div className={ styles.container_footer }>
      <div className={ styles.footer_bar }>
        <div className={ styles.contact }>info@ataraxiaclub.com</div>
        <div className={ styles.container_menu }>
          <a className={ (section === 'home') ? styles.active : '' } href={ '/' } >HOME</a>
          <a className={ (section === 'events') ? styles.active : '' } href={ '/events/' } >EVENTOS</a>
          <a className={ (section === 'djs') ? styles.active : '' } href={ '/djs/' } >DJ'S</a>
          <a className={ (section === 'media') ? styles.active : '' } href={ '/media/' } >MEDIA</a>
        </div>
        <div className={ styles.social_networks }>
          { networksTag }
        </div>
      </div>
      <div className={ styles.container_logos }>
        <div className={ styles.text }>By</div>
        <img 
          src={ '/assets/images/ataraxia/logo_pmorenopina.png' } 
          alt={ 'ΔTΔRΔXIΔ | MorenoPina' }            
        />
      </div>
    </div>
  )
}

export default Footer