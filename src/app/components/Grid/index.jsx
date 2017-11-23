import React from 'react'
import { PropTypes } from 'prop-types'

// Subcomponents
import Item from './subs/Item/'

// Styles
import styles from './grid.css'

const Grid = ({ elements,  oneElement}) => {
  
  const styleTag = (!oneElement) ? styles.container_four_columns : styles.container_full
  const elementsTag = elements.map((item, index) => {
    return (
      <Item 
        key={ index } 
        fourElements={ (!oneElement) ? true : false } 
        item={ item } 
      />
    )
  })

  return (
    <div className={ styleTag }>
      { elementsTag }
    </div>
  )
  
}

const propTypes= {
  //elements: PropTypes.string.isRequired
  elements: PropTypes.array
}

Grid.propTypes= propTypes


export default Grid