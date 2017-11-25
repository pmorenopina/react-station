import React, { Component } from 'react'

// Styles
import styles from './header.css'

export class Header extends Component {

  render() {
    const { handleMenu } = this.props

    return (
      <div className={ styles.container_header }>
        <div className={ styles.bar }>
          <img className={ styles.icon_menu}  src={ 'assets/icons/hamburger_menu.svg' } onClick={ () => handleMenu() } />
          <a href={ '/' }>
            <img className={ styles.logo } src={ 'assets/icons/ataraxia/logo.svg' } />
          </a> 
        </div>
      </div>
    )
  }
}

export default Header