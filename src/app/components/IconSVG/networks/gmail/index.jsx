
// Libs
import React from 'react'
import { PropTypes } from 'prop-types'

// GmailIconSVG Component Definition
const GmailIconSVG = ({ className }) => {

  return (
    <svg 
      className={ className }
      x={ "0px" }
      y={ "0px" }
      width={ "40px" }
      height={ "40px" }
      viewBox={ "0 0 510 510" }
    >
      <g>
        <g>
          <path d={ "M459,51H51C22.95,51,0,73.95,0,102v306c0,28.05,22.95,51,51,51h408c28.05,0,51-22.95,51-51V102    C510,73.95,487.05,51,459,51z M459,408h-51V183.6l-153,96.9l-153-96.9V408H51V102h30.6L255,209.1L428.4,102H459V408z" } />
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  )
}

// GmailIconSVG PropTypes
GmailIconSVG.propTypes = {
  className: PropTypes.string
}

// GmailIconSVG DefaultProps
GmailIconSVG.defaultProps = {
  className: null
}

export default GmailIconSVG