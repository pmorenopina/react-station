import React, { Component } from 'react'

// Containers 
import Header from './containers/Header'
import Footer from './containers/Footer'
import Events from './containers/Events'
import Djs from './containers/Djs'

// Styles
import styles from './ataraxia.css'

export class Ataraxia extends Component {

  render () {

    let bodyTag = ''
    if (this.props.params && this.props.params.section) {
      if (this.props.params.section === 'events') {
        bodyTag = <Events />
      } else if (this.props.params.section === 'djs') {
        bodyTag = <Djs />
      }
    }

    return (
      <div className={ styles.ataraxia_container }>
        <Header />
        { bodyTag }
        <Footer />
      </div>
    )
  }
}

export default Ataraxia
