import React, { Component } from 'react'

// Components 
import GridComponent from '../../components/Grid'

// Config
import CONFIG from './config.json'

// Styles
import styles from './styles.css'

export class Ataraxia extends Component {

  render () {
    return (
      <div className={ styles.ataraxia_container }>
        <div className={ styles.container_next_events }>
          <div className={ styles.title_container }>
            <div className={ styles.title } >PRÓXIMOS</div>
            <div className={ styles.title } >EVENTOS</div>
          </div>
          <GridComponent elements={ [''] } />
        </div>
        <div className={ styles.container_last_events }>
          <div className={ styles.title_container }>
            <div className={ styles.title } >EVENTOS</div>
            <div className={ styles.title } >PASADOS</div>
          </div>
          <GridComponent elements={ ['', '', '', ''] } />
          <GridComponent elements={ ['', ''] } />
        </div>
      </div>
    )
  }
}

export default Ataraxia
