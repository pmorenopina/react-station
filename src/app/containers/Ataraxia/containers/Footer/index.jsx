import React, { Component } from 'react'

// Styles
import styles from './footer.css'

export class Footer extends Component {

  render() {
    return (
      <div className={ styles.container_footer }>
        <div className={ styles.text }>By</div>
        <img src={ '/assets/images/ataraxia/logo_pmorenopina.png' } />
      </div>
    )
  }
}

export default Footer