// Libs
import React from 'react'
import { PropTypes } from 'prop-types'

// PlayIconSVG Component Definition
const PlayIconSVG = ({ className, onClick }) => {

  return (
    <svg
      className={ className } 
      width={ "120px" }
      height={ "120px" }
      viewBox={ "0 0 426.667 426.667" }
      onClick={ () => onClick() }
    >
      <g>
        <g>
          <g>
            <polygon points={ "170.67 309.33 298.67 213.33 170.67 117.33" } />
            <path d={ "m213.33 0c-117.87 0-213.33 95.467-213.33 213.33s95.467 213.33 213.33 213.33 213.33-95.466 213.33-213.33-95.467-213.33-213.33-213.33zm0 384c-94.08 0-170.67-76.587-170.67-170.67s76.587-170.67 170.67-170.67 170.67 76.586 170.67 170.67-76.587 170.67-170.67 170.67z" } />
          </g>
        </g>
      </g>
    </svg>
  )
}

// PlayIconSVG PropTypes
PlayIconSVG.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
}

// PlayIconSVG DefaultProps
PlayIconSVG.defaultProps = {
  className: null,
  onClick: null
}

export default PlayIconSVG