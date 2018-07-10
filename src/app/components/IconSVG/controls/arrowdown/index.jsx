// Libs
import React from 'react'
import { PropTypes } from 'prop-types'

// ArrowDownIconSVG Component Definition
const ArrowDownIconSVG = ({ className }) => {

  return (
    <svg 
      className={ className }
      x={ "0px" }
      y={ "0px" }
      width={ "50px" }
      height={ "50px" }
      viewBox={ "0 0 306 306" }
    >
      <g>
        <g>
          <polygon points={ "270.3,58.65 153,175.95 35.7,58.65 0,94.35 153,247.35 306,94.35" } />
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

// ArrowDownIconSVG PropTypes
ArrowDownIconSVG.propTypes = {
  className: PropTypes.string
}

// ArryowDownIconSVG Default Props
ArrowDownIconSVG.defaultProps = {
  className: null
}

export default ArrowDownIconSVG