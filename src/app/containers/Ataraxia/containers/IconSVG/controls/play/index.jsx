import React from 'react'
import { PropTypes } from 'prop-types'

const PlayIconSVG = ({ classNames, onClick }) => {

  return (
    <svg 
      version={ "1.1" }
      className={ classNames }
      x={ "0px" }
      y={ "0px" }
      width={ "120px" }
      height={ "120px" }
      viewBox={ "0 0 426.667 426.667" }
      onClick={ () => onClick() }
    >
      <g>
        <g>
          <g>
            <polygon points={ "170.667,309.333 298.667,213.333 170.667,117.333" } />
            <path d={ "M213.333,0C95.467,0,0,95.467,0,213.333s95.467,213.333,213.333,213.333S426.667,331.2,426.667,213.333     S331.2,0,213.333,0z M213.333,384c-94.08,0-170.667-76.587-170.667-170.667S119.253,42.667,213.333,42.667     S384,119.253,384,213.333S307.413,384,213.333,384z" } />
          </g>
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

const propTypes= {
  classNames: PropTypes.string,
  onClick: PropTypes.func
}

PlayIconSVG.propTypes= propTypes

export default PlayIconSVG