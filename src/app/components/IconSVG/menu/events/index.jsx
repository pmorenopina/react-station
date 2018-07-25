// Libs
import React from 'react'
import { PropTypes } from 'prop-types'

// EventsIconSVG Component Definition
const EventsIconSVG = ({ className }) => {

  return (
    <svg
      className={ className } 
      width={ "25px" }
      height={ "25px" }
      fill={ "black" }
      viewBox={ "0 0 306 306" }
    >
      <g>
        <g>
          <polygon points={ "153 230.78 247.35 299.62 211.65 187.42 306 121.12 191.25 121.12 153 6.375 114.75 121.12 0 121.12 94.35 187.42 58.65 299.62" } />
        </g>
      </g>
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