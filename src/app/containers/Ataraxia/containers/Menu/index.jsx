import React, { Component } from 'react'

// Styles
import styles from './menu.css'

export class Menu extends Component {

  render () {
    const { handleMenu } = this.props
    return (
      <div className={ styles.container_menu }>
        <img 
          className={ styles.icon }
          src={ '/assets/icons/close.svg' } 
          onClick={ () => handleMenu() }
        />
        <lu>
          <li>
            <a href={ '/ataraxia/' }> HOME </a>
          </li>
          <li>
            <a href={ '/ataraxia/events' }> EVENTOS </a>
          </li>
          <li>
            <a href={ '/ataraxia/djs' }> DJ'S </a>
          </li>
          <li>
            <a href={ '/ataraxia/media' }> MEDIA </a>
          </li>
        </lu>
      </div>
    )
  }
}

export default Menu
