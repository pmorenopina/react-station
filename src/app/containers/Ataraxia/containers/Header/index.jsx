import React, { Component } from 'react'

// Styles
import styles from './header.css'

export class Header extends Component {

  render() {
    const { handleMenu } = this.props

    return (
      <div className={ styles.container_header }>
        <div className={ styles.bar }>
          <img className={ styles.icon_menu }  src={ '/assets/icons/hamburger_menu.svg' } onClick={ () => handleMenu() } />
          <a className={ `${ styles.icon_social } ${ styles.first }` } href={ 'https://www.facebook.com/groups/1903029973318856/' } target={ '_blank' }>
            <img src={ '/assets/icons/ataraxia/facebook_white.svg' } />
          </a>
          <a className={ styles.icon_social } href={ 'https://www.instagram.com/ataraxia_club/' } target={ '_blank' }>
            <img src={ '/assets/icons/ataraxia/instagram_white.svg' } />
          </a>
          <a className={ styles.icon_social } href={ 'https://www.youtube.com/user/JavyDeejay' } target={ '_blank' }>
            <img src={ '/assets/icons/ataraxia/youtube_white.svg' } />
          </a>
          <a className={ styles.container_logo } href={ '/' }>
            <img className={ styles.logo } src={ '/assets/icons/ataraxia/logo.svg' } />
          </a> 
        </div>
      </div>
    )
  }
}

export default Header