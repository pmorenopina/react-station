// Libs
import React from 'react'
import { PropTypes } from 'prop-types'

// DjsIconSVG Component Definition
const DjsIconSVG = ({ className }) => {

  return (
    <svg
      className={ className } 
      width={ "25px" }
      height={ "25px" }
      viewBox={ "0 0 357 357" }
    >
      <g>
        <g>
          <polygon points={ "38.25 0 38.25 357 318.75 178.5" } />
        </g>
      </g>
    </svg>
  )
}

// DjsIconSVG PropTypes
DjsIconSVG.propTypes = {
  className: PropTypes.string
}

// DjsIconSVG DefaultProps
DjsIconSVG.defaultProps = {
  className: null
}

export default DjsIconSVG