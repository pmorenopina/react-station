// Libs
import React from 'react'
import { PropTypes } from 'prop-types'

// SoundIconSVG Component Definition
const SoundIconSVG = ({ className, onClick }) => {

  return (
    <svg
      className={ className }
      width={ "40px" }
      height={ "40px" }
      viewBox={ "0 0 384 384" }
      onClick={ () => onClick() }
    >
      <g>
        <g>
          <g>
            <path d={ "M288,192c0-37.653-21.76-70.187-53.333-85.867v171.84C266.24,262.187,288,229.653,288,192z" } />
            <polygon points={ "0 128 0 256 85.333 256 192 362.67 192 21.333 85.333 128" } />
            <path d={ "m234.67 4.907v44.053c61.653 18.347 106.67 75.413 106.67 143.04s-45.013 124.69-106.67 143.04v44.053c85.44-19.413 149.33-95.68 149.33-187.09s-63.893-167.68-149.33-187.09z" } />
          </g>
        </g>
      </g>
    </svg>
  )
}

// SoundIconSVG PropTypes
SoundIconSVG.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
}

// SoundIconSVG DefaultProps
SoundIconSVG.defaultProps = {
  className: null,
  onClick: null
}

export default SoundIconSVG