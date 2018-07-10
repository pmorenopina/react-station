// Libs
import React from 'react'
import { PropTypes } from 'prop-types'

// EventsIconSVG Component Definition
const EventsIconSVG = ({ className }) => {

  return (
    <svg
      x={ "0px" } 
      y={ "0px" } 
      fill={ "black" }
      className={ className }
      width={ "25px" }
      height={ "25px" }
      viewBox= { "0 0 306 306" }
    >
      <g>
        <g id="star-rate">
          <polygon points="153,230.775 247.35,299.625 211.65,187.425 306,121.125 191.25,121.125 153,6.375 114.75,121.125 0,121.125 94.35,187.425 58.65,299.625 		"/>
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

// EventsIconSVG PropTypes
EventsIconSVG.propTypes = {
  className: PropTypes.string
}

// EventsIconSVG DefaultProps
EventsIconSVG.defaultProps = {
  className: null
}

export default EventsIconSVG