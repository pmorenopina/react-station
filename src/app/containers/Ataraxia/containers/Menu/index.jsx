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
        </lu>
      </div>
    )
  }
}

export default Menu
