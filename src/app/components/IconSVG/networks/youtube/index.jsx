// Libs
import React from 'react'
import { PropTypes } from 'prop-types'

// YoutubeIconSVG Component Definition
const YoutubeIconSVG = ({ className }) => {

  return (
    <svg 
      className={ className }
      x={ "0px" }
      y={ "0px" }
      width={ "40px" }
      height={ "40px" }
      viewBox={ "0 0 310 310" }
    >
      <g>
        <path d={ "M297.917,64.645c-11.19-13.302-31.85-18.728-71.306-18.728H83.386c-40.359,0-61.369,5.776-72.517,19.938   C0,79.663,0,100.008,0,128.166v53.669c0,54.551,12.896,82.248,83.386,82.248h143.226c34.216,0,53.176-4.788,65.442-16.527   C304.633,235.518,310,215.863,310,181.835v-53.669C310,98.471,309.159,78.006,297.917,64.645z M199.021,162.41l-65.038,33.991   c-1.454,0.76-3.044,1.137-4.632,1.137c-1.798,0-3.592-0.484-5.181-1.446c-2.992-1.813-4.819-5.056-4.819-8.554v-67.764   c0-3.492,1.822-6.732,4.808-8.546c2.987-1.814,6.702-1.938,9.801-0.328l65.038,33.772c3.309,1.718,5.387,5.134,5.392,8.861   C204.394,157.263,202.325,160.684,199.021,162.41z" } />
      </g>
    </svg>
  )
}

// YoutubeIconSVG PropTypes
YoutubeIconSVG.propTypes = {
  className: PropTypes.string  
}

// YoutubeIconSVG DefaultProps
YoutubeIconSVG.defaultProps = {
  className: null
}

export default YoutubeIconSVG