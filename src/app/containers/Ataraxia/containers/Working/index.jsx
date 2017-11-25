import React, { Component } from 'react'

import styles from './working.css'

export class Working extends Component {


  render () {
    return (
      <div className={ styles.container_working }>
        <img src={ '/assets/images/ataraxia/ataraxia.png' } />
        <div className={ styles.text }>Coming soon...</div>
      </div>
    )
  }}

export default Working
