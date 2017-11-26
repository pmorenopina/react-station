import React, { Component } from 'react'

// Styles
import styles from './footer.css'

export class Footer extends Component {

  render() {
    const { section } = this.props
    
    return (
      <div className={ styles.container_footer }>
        <div className={ styles.container_menu }>
          <a className={ (section === 'home') ? styles.active : '' } href={ '/' } >HOME</a>
          <a className={ (section === 'events') ? styles.active : '' } href={ '/events/' } >EVENTOS</a>
          <a className={ (section === 'djs') ? styles.active : '' } href={ '/djs/' } >DJ'S</a>
          <a className={ (section === 'media') ? styles.active : '' } href={ '/media/' } >MEDIA</a>
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