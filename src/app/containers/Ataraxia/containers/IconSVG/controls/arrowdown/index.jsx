import React from 'react'
import { PropTypes } from 'prop-types'

const ArrowDownIconSVG = ({ classNames }) => {

  return (
    <svg 
      version={ "1.1" }
      className={ classNames }
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

const propTypes= {
  classNames: PropTypes.string
}

ArrowDownIconSVG.propTypes= propTypes

export default ArrowDownIconSVG