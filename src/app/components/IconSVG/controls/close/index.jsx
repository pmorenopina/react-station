// Libs
import React from 'react'
import { PropTypes } from 'prop-types'

// CloseIconSVG Component Definition
const CloseIconSVG = ({ className }) => {

  return (
    <svg
      className={ className } 
      width={ "35px" }
      height={ "35px" }
      viewBox={ "0 0 32 32" }
    >
      <g>
        <g>
          <path d={ "m16 0c-8.836 0-16 7.164-16 16s7.164 16 16 16 16-7.164 16-16-7.164-16-16-16zm7.914 21.086l-2.828 2.828-5.086-5.086-5.086 5.086-2.828-2.828 5.086-5.086-5.086-5.086 2.828-2.828 5.086 5.086 5.086-5.086 2.828 2.828-5.086 5.086 5.086 5.086z" } />
        </g>
      </g>
    </svg>
  )
}

// CloseIconSVG PropTypes
CloseIconSVG.propTypes = {
  className: PropTypes.string  
}

// CloseIconSVG DefaultProps
CloseIconSVG.defaultProps = {
  className: null
}

export default CloseIconSVG