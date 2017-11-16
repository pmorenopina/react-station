import React from 'react'
import { PropTypes } from 'prop-types'

// Subcomponents
import Item from './subs/Item/'

// Styles
import styles from './styles.css'

const Grid = ({ elements }) => {
  
  const styleTag = (elements && elements.length > 1) ? styles.container_four_columns : styles.container_full
  const elementsTag = elements.map((item, index) => {
    return (
      <Item 
        key={ index } 
        fourElements={ (elements && elements.length > 1) ? true : false } 
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