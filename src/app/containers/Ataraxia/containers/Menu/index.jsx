import React, { Component } from 'react'

// Styles
import styles from './menu.css'

export class Menu extends Component {

  render () {
    const { handleMenu, section } = this.props
    
    return (
      <div className={ styles.container_menu }>
        <img 
          className={ styles.icon }
          src={ '/assets/icons/close.svg' } 
          onClick={ () => handleMenu() }
          alt={ 'ΔTΔRΔXIΔ | HambugerMenuIcon' }          
        />
        <lu>
          <li>
            <a className={ (section === 'home') ? styles.active : '' } href={ '/' }> HOME </a>
          </li>
          <li>
            <a className={ (section === 'events') ? styles.active : '' } href={ '/events/' }> EVENTOS </a>
          </li>
          <li>
            <a className={ (section === 'djs') ? styles.active : '' } href={ '/djs/' }> DJ'S </a>
          </li>
          <li>
            <a className={ (section === 'media') ? styles.active : '' } href={ '/media/' }> MEDIA </a>
          </li>
          <li className={ styles.container_networks }>
            <a className={ `${ styles.icon_social } ${ styles.first }` } href={ 'https://www.facebook.com/ataraxiaclub/' } target={ '_blank' }>
              <img 
                src={ '/assets/icons/ataraxia/facebook_white.svg' } 
                alt={ 'ΔTΔRΔXIΔ | FacebookIcon' }                
              />
            </a>
            <a className={ styles.icon_social } href={ 'https://www.instagram.com/ataraxia_club/' } target={ '_blank' }>
              <img 
                src={ '/assets/icons/ataraxia/instagram_white.svg' } 
                alt={ 'ΔTΔRΔXIΔ | InstagramIcon' }                
              />
            </a>
            <a className={ styles.icon_social } href={ 'https://www.youtube.com/user/JavyDeejay' } target={ '_blank' }>
              <img 
                src={ '/assets/icons/ataraxia/youtube_white.svg' } 
                alt={ 'ΔTΔRΔXIΔ | YoutubeIcon' }                
              />
            </a>
          </li>
        </lu>
      </div>
    )
  }
}

export default Menu
