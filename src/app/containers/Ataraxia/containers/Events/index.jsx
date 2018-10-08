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
      <section className={ styles.container_next_events }>
        <h1 className={ styles.title }>NEXT EVENT</h1>
        <GridComponent key={ 0 } elements={ [CONFIG.events[0]] } oneElement= { true } />
      </section>
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
        <section className={ styles.container_last_events }>
          <h1 className={ styles.title }>LAST EVENTS</h1>
          { arrayGridItemsTag }
        </section>
      )
    }

    return (
      <main className={ styles.container }>
        { nextEventGridTag }
        { lastEventsGridTag }
      </main>
    )
  }
}

export default Events
