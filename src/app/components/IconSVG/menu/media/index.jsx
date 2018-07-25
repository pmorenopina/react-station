// Libs
import React from 'react'
import { PropTypes } from 'prop-types'

// MediaIconSVG Component Definition
const MediaIconSVG = ({ className }) => {

  return (
    <svg
      className={ className } 
      width="25px" 
      height="25px" 
      viewBox="0 0 60 60" 
    >
      <g>
        <path d={ "M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,44c-7.72,0-14-6.28-14-14s6.28-14,14-14s14,6.28,14,14S37.72,44,30,44z" } />
        <path d={ "m30 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z" } />
      </g>
    </svg>
  )
}

// MediaIconSVG PropTypes
MediaIconSVG.propTypes = {
  className: PropTypes.string
}

// MediaIconSVG DefaultProps
MediaIconSVG.defaultProps = {
  className: null
}

export default MediaIconSVG