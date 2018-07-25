// Libs
import React from 'react'
import { PropTypes } from 'prop-types'

// PauseIconSVG Component Definition
const PauseIconSVG = ({ className, onClick }) => {

  return (
    <svg
      className={ className } 
      width={ "40px" }
      height={ "40px" }
      viewBox={ "0 0 426.667 426.667" }
      onClick={ () => onClick() }
    >
      <g>
        <g>
          <g>
            <rect 
              x={ "234.67" } 
              y={ "128" } 
              width={ "42.667" } 
              height={ "170.67" }
            />
            <rect 
              x={ "149.33" } 
              y={ "128" } 
              width={ "42.667" } 
              height={ "170.67" } 
            />
            <path d={ "m213.33 0c-117.87 0-213.33 95.467-213.33 213.33s95.467 213.33 213.33 213.33 213.33-95.466 213.33-213.33-95.467-213.33-213.33-213.33zm0 384c-94.08 0-170.67-76.587-170.67-170.67s76.587-170.67 170.67-170.67 170.67 76.586 170.67 170.67-76.587 170.67-170.67 170.67z" } />
          </g>
        </g>
      </g>
    </svg>
  )
}

// PauseIconSVG PropTypes
PauseIconSVG.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
}

// PauseIconSVG DefaultProps
PauseIconSVG.defaultProps = {
  className: null,
  onClick: null
}

export default PauseIconSVG