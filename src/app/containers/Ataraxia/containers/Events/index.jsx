import React, { Component } from 'react'

// Components 
import GridComponent from 'components/Grid'

// Config
import CONFIG from '../../config.json'

// Styles
import styles from './events.css'

export class Events extends Component {

  
  render() {

    const nextEventGridTag = (CONFIG.events && CONFIG.events[0].description) ? (
      <div className={ styles.container_next_events }>
        <div className={ styles.title_container }>
          <div className={ styles.title } >PRÓXIMOS</div>
          <div className={ styles.title } >EVENTOS</div>
        </div>
        <GridComponent key={ 0 } elements={ [CONFIG.events[0]] } oneElement= { true } />
      </div>
    ) : ''

    let lastEventsGridTag = ''
    if (CONFIG.events && CONFIG.events.length > 1) {
      let arrayGridItems = []
      const arrayGridItemsTag = CONFIG.events.map((item, index) => {
        if (index !== 0) {
          arrayGridItems.push(item)
          if (arrayGridItems.length === 4) {
            let elements = arrayGridItems
            arrayGridItems = []
            return (
              <GridComponent key={ index } elements={ elements } />
            )
          } else if (CONFIG.events.length === (index + 1)) {
            let elements = arrayGridItems
            arrayGridItems = []
            return (
              <GridComponent key={ index } elements={ elements } />
            )
          }
        }
      })
      lastEventsGridTag = (
        <div className={ styles.container_last_events }>
          <div className={ styles.title_container }>
            <div className={ styles.title } >EVENTOS</div>
            <div className={ styles.title } >PASADOS</div>
          </div>
          { arrayGridItemsTag }
        </div>
      )
    }

    return (
      <div className={ styles.container }>
        { nextEventGridTag }
        { lastEventsGridTag }
      </div>
    )
  }
}

export default Events
