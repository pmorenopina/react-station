import React, { Component } from 'react'

// Styles
import styles from './footer.css'

export class Footer extends Component {

  render() {
    const { section } = this.props
    
    return (
      <div className={ styles.container_footer }>
        <div className={ styles.footer_bar }>
          <div className={ styles.contact}>info@ataraxiaclub.com</div>
          <div className={ styles.container_menu }>
            <a className={ (section === 'home') ? styles.active : '' } href={ '/' } >HOME</a>
            <a className={ (section === 'events') ? styles.active : '' } href={ '/events/' } >EVENTOS</a>
            <a className={ (section === 'djs') ? styles.active : '' } href={ '/djs/' } >DJ'S</a>
            <a className={ (section === 'media') ? styles.active : '' } href={ '/media/' } >MEDIA</a>
          </div>
          <div className={ styles.social_networks}>
            <a className={ `${ styles.icon_social } ${ styles.first }` } href={ 'https://www.facebook.com/groups/1903029973318856/' } target={ '_blank' }>
              <img src={ '/assets/icons/ataraxia/facebook_white.svg' } />
            </a>
            <a className={ styles.icon_social } href={ 'https://www.instagram.com/ataraxia_club/' } target={ '_blank' }>
              <img src={ '/assets/icons/ataraxia/instagram_white.svg' } />
            </a>
            <a className={ styles.icon_social } href={ 'https://www.youtube.com/user/JavyDeejay' } target={ '_blank' }>
              <img src={ '/assets/icons/ataraxia/youtube_white.svg' } />
            </a>
          </div>
        </div>
        <div className={ styles.container_logos }>
          <div className={ styles.text }>By</div>
          <img src={ '/assets/images/ataraxia/logo_pmorenopina.png' } />
        </div>
      </div>
    )
  }
}

export default Footer