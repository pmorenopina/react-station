// Libs
import React from 'react'
import { PropTypes } from 'prop-types'

// CloseIconSVG Component Definition
const CloseIconSVG = ({ classNames }) => {

  return (
    <svg 
      className={ classNames }
      x={ "0px" }
      y={ "0px" }
      width={ "35px" }
      height={ "35px" }
      viewBox={ "0 0 32 32" }
    >
      <g>
        <g>
          <path d={ "M16,0C7.164,0,0,7.164,0,16s7.164,16,16,16s16-7.164,16-16S24.836,0,16,0z M23.914,21.086    l-2.828,2.828L16,18.828l-5.086,5.086l-2.828-2.828L13.172,16l-5.086-5.086l2.828-2.828L16,13.172l5.086-5.086l2.828,2.828    L18.828,16L23.914,21.086z" } />
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

// CloseIconSVG PropTypes
CloseIconSVG.propTypes = {
  classNames: PropTypes.string  
}

// CloseIconSVG DefaultProps
CloseIconSVG.defaultProps = {
  className: null
}

export default CloseIconSVG