// Libs
import React from 'react'
import { PropTypes } from 'prop-types'

// LocationIconSVG Component Definition
const LocationIconSVG = ({ className }) => {

  return (
    <svg
      className={ className } 
      viewBox="0 0 54.757 54.757"
    >
      <g>
        <g>
          <path d={ "m40.94 5.617c-3.622-3.622-8.438-5.617-13.56-5.617-5.123 0-9.938 1.995-13.56 5.617-6.703 6.702-7.536 19.312-1.804 26.952l15.364 22.188 15.341-22.157c5.755-7.671 4.922-20.281-1.781-26.983zm-13.383 20.383c-3.859 0-7-3.141-7-7s3.141-7 7-7 7 3.141 7 7-3.141 7-7 7z" } />
        </g>
      </g>
    </svg>
  )
}

// LocationIconSVG PropTypes
LocationIconSVG.propTypes = {
  className: PropTypes.string
}

// LocationIconSVG DefaultProps
LocationIconSVG.defaultProps = {
  className: null
}

export default LocationIconSVG