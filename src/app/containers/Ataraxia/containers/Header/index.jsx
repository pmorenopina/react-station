import React, { Component } from 'react'

// Styles
import styles from './header.css'

export class Header extends Component {

  render() {
    return (
      <div className={ styles.container_header }>
        <a href={ '/ataraxia' }>
          <img className={ styles.logo } src={ '/assets/icons/ataraxia/logo.svg' }/>
        </a> 
      </div>
    )
  }
}

export default Header