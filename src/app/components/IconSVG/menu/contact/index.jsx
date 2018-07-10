// Libs
import React from 'react'
import { PropTypes } from 'prop-types'

// ContactIconSVG Component Definition
const ContactIconSVG = ({ className }) => {

  return (
    <svg
      className={ className }
      x={ "0px" } 
      y={ "0px" }
      width={ "25px" }
      height={ "25px" } 
      viewBox={ "0 0 469.333 469.333" }
    >
      <g>
        <path d={ "M426.667,64C403.093,56.533,376.96,53.333,352,53.333c-41.6,0-86.4,8.533-117.333,32c-30.933-23.467-75.733-32-117.333-32    c-41.6,0-86.4,8.533-117.333,32v312.533c0,5.333,5.333,10.667,10.667,10.667c2.133,0,3.2-1.067,5.333-1.067    C44.8,393.6,86.4,384,117.333,384c41.6,0,86.4,8.533,117.333,32c28.8-18.133,81.067-32,117.333-32c35.2,0,71.467,6.4,101.333,22.4    c2.133,1.067,3.2,1.067,5.333,1.067c5.333,0,10.667-5.333,10.667-10.667V85.333C456.533,75.733,442.667,69.333,426.667,64z     M426.667,352C403.2,344.533,377.6,341.333,352,341.333c-36.267,0-88.533,13.867-117.333,32V128c28.8-18.133,81.067-32,117.333-32    c25.6,0,51.2,3.2,74.667,10.667V352z" } />
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

// ContactIconSVG PropTypes
ContactIconSVG.propTypes = {
  className: PropTypes.string
}

// ContactIconSVG DefaultProps
ContactIconSVG.defaultProps = {
  className: null
}

export default ContactIconSVG