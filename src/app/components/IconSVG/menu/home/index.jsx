// Libs
import React from 'react'
import { PropTypes } from 'prop-types'

// HomeIconSVG Component Definition
const HomeIconSVG = ({ className }) => {

  return (
    <svg
      className={ className } 
      width={ "25px" }
      height={ "25px" }
      fill={ "black" }
      viewBox={ "0 0 510 510" }
    >
      <g>
        <g>
          <polygon points={ "204 471.75 204 318.75 306 318.75 306 471.75 433.5 471.75 433.5 267.75 510 267.75 255 38.25 0 267.75 76.5 267.75 76.5 471.75" } />
        </g>
      </g>
    </svg>
  )
}

// HomeIconSVG PropTypes
HomeIconSVG.propTypes = {
  className: PropTypes.string
}

// HomeIconSVG DefaultProps
HomeIconSVG.defaultProps = {
  className: null
}

export default HomeIconSVG