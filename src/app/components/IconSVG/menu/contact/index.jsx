// Libs
import React from 'react'
import { PropTypes } from 'prop-types'

// ContactIconSVG Component Definition
const ContactIconSVG = ({ className }) => {

  return (
    <svg
      className={ className } 
      width={ "25px" }
      height={ "25px" }
      viewBox={ "0 0 469.333 469.333" }
    >
      <g>
        <path d={ "m426.67 64c-23.574-7.467-49.707-10.667-74.667-10.667-41.6 0-86.4 8.533-117.33 32-30.933-23.467-75.733-32-117.33-32s-86.4 8.533-117.33 32v312.53c0 5.333 5.333 10.667 10.667 10.667 2.133 0 3.2-1.067 5.333-1.067 28.799-13.866 70.399-23.466 101.33-23.466 41.6 0 86.4 8.533 117.33 32 28.8-18.133 81.067-32 117.33-32 35.2 0 71.467 6.4 101.33 22.4 2.133 1.067 3.2 1.067 5.333 1.067 5.333 0 10.667-5.333 10.667-10.667v-311.47c-12.799-9.6-26.665-16-42.665-21.333zm0 288c-23.467-7.467-49.067-10.667-74.667-10.667-36.267 0-88.533 13.867-117.33 32v-245.33c28.8-18.133 81.067-32 117.33-32 25.6 0 51.2 3.2 74.667 10.667v245.33z" } />
      </g>
    </svg>
  )
}

// ContactIconSVG PropTypes
ContactIconSVG.propTypes = {
  className: PropTypes.string
}

// ContactIconSVG DefaultProps
ContactIconSVG.defaultProps = {
  className: null
}

export default ContactIconSVG