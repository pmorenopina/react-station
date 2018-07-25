// Libs
import React from 'react'
import { PropTypes } from 'prop-types'

// OpenIconSVG Component Definition
const OpenIconSVG = ({ className, onClick }) => {

  return (
    <svg
      className={ className }
      width={ "45px" }
      height={ "45px" }
      viewBox={ "0 0 32 32" }
      onClick={ () => onClick() }
    >
      <path d={ "m4 10h24c1.104 0 2-0.896 2-2s-0.896-2-2-2h-24c-1.104 0-2 0.896-2 2s0.896 2 2 2zm24 4h-24c-1.104 0-2 0.896-2 2s0.896 2 2 2h24c1.104 0 2-0.896 2-2s-0.896-2-2-2zm0 8h-24c-1.104 0-2 0.896-2 2s0.896 2 2 2h24c1.104 0 2-0.896 2-2s-0.896-2-2-2z" } />
    </svg>
  )
}

// OpenIconSVG PropTypes
OpenIconSVG.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
}

// OpenIconSVG DefaultProps
OpenIconSVG.defaultProps = {
  className: null,
  onClick: null
}

export default OpenIconSVG