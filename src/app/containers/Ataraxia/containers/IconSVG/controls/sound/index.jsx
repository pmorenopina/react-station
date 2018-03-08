import React from 'react'
import { PropTypes } from 'prop-types'

const SoundIconSVG = ({ classNames, onClick }) => {

  return (
    <svg 
      version={ "1.1" }
      className={ classNames }
      x={ "0px" }
      y={ "0px" }
      width={ "40px" }
      height={ "40px" }
      viewBox={ "0 0 384 384" }
      onClick={ () => onClick() }
    >
      <g>
        <g>
          <g>
            <path d={ "M288,192c0-37.653-21.76-70.187-53.333-85.867v171.84C266.24,262.187,288,229.653,288,192z" } />
            <polygon points={ "0,128 0,256 85.333,256 192,362.667 192,21.333 85.333,128" } />
            <path d={ "M234.667,4.907V48.96C296.32,67.307,341.333,124.373,341.333,192S296.32,316.693,234.667,335.04v44.053     C320.107,359.68,384,283.413,384,192S320.107,24.32,234.667,4.907z" } />
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

SoundIconSVG.propTypes= propTypes

export default SoundIconSVG