// Libs
import React from 'react'
import { PropTypes } from 'prop-types'

// MuteIconSVG Component Definition
const MuteIconSVG = ({ className, onClick }) => {

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
            <path d={ "m288 192c0-37.653-21.76-70.187-53.333-85.867v47.147l52.373 52.373c0.64-4.48 0.96-9.066 0.96-13.653z" } />
            <path d={ "M341.333,192c0,20.053-4.373,38.933-11.52,56.32l32.32,32.32C376,254.08,384,224,384,192     c0-91.307-63.893-167.68-149.333-187.093V48.96C296.32,67.307,341.333,124.373,341.333,192z" } />
            <polygon points={ "192 21.333 147.41 65.92 192 110.51" } />
            <path d={ "M27.2,0L0,27.2L100.8,128H0v128h85.333L192,362.667V219.2l90.773,90.773c-14.293,10.987-30.4,19.84-48.107,25.173V379.2     c29.333-6.72,56.107-20.16,78.613-38.613L356.8,384l27.2-27.2l-192-192L27.2,0z" } />
          </g>
        </g>
      </g>
    </svg>
  )
}

// MuteIconSVG PropTypes
MuteIconSVG.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
}

// MuteIconSVG Default Props
MuteIconSVG.defaultProps = {
  className: null,
  onClick: null
}

export default MuteIconSVG