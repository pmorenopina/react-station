import React from 'react'
import { PropTypes } from 'prop-types'

import HomeIconSVG from './menu/home'
import EventsIconSVG from './menu/events'
import MediaIconSVG from './menu/media'
import DjsIconSVG from './menu/djs'

const IconSVG = ({ type, icon, classNames }) => {

  let iconSVG = null

  if (type === 'menu') {
    if (icon === 'home') {
      iconSVG = <HomeIconSVG classNames={ classNames } />
    }
    else if (icon === 'events') {
      iconSVG = <EventsIconSVG classNames={ classNames } />
    }
    else if (icon === 'djs') {
      iconSVG = <DjsIconSVG classNames={ classNames } />
    }
    else if (icon === 'media') {
      iconSVG = <MediaIconSVG classNames={ classNames } />
    }
  }

  return iconSVG
}

const propTypes= {

}

IconSVG.propTypes= propTypes


export default IconSVG