import React from 'react'
import { PropTypes } from 'prop-types'

import ArrowDownIconSVG from './controls/arrowdown'
import BeatportIconSVG from './networks/beatport'
import CloseIconSVG from './controls/close'
import ContactIconSVG from './menu/contact'
import DjsIconSVG from './menu/djs'
import EventsIconSVG from './menu/events'
import FacebookIconSVG from './networks/facebook'
import GmailIconSVG from './networks/gmail'
import HomeIconSVG from './menu/home'
import InstagramIconSVG from './networks/instagram' 
import MediaIconSVG from './menu/media'
import MuteIconSVG from './controls/mute'
import OpenIconSVG from './controls/open'
import PauseIconSVG from './controls/pause'
import PlayIconSVG from './controls/play'
import SoundIconSVG from './controls/sound'
import YoutubeIconSVG from './networks/youtube'

import AtaraxiaLogoIconSVG from './ataraxia/logo'

import LocationIconSVG from './map/location'

const IconSVG = ({ type, icon, classNames, onClick }) => {

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
    else if (icon === 'contact') {
      iconSVG = <ContactIconSVG classNames={ classNames } />
    }
  } 
  else if (type === 'map') {
    if (icon === 'location') {
      iconSVG = <LocationIconSVG classNames={ classNames } />
    }
  }
  else if (type === 'networks') {
    if (icon === 'beatport') {
      iconSVG = <BeatportIconSVG classNames={ classNames } />
    }
    else if (icon === 'facebook') {
      iconSVG = <FacebookIconSVG classNames={ classNames } />
    }
    else if (icon === 'gmail') {
      iconSVG = <GmailIconSVG classNames={ classNames } />
    }
    else if (icon === 'instagram') {
      iconSVG = <InstagramIconSVG classNames={ classNames } />
    }
    else if (icon === 'youtube') {
      iconSVG = <YoutubeIconSVG classNames={ classNames } />
    }
  }
  else if (type === 'controls') {
    if (icon === 'arrowdown') {
      iconSVG = <ArrowDownIconSVG classNames={ classNames } />
    }
    if (icon === 'close') {
      iconSVG = <CloseIconSVG classNames={ classNames } />
    }
    else if (icon === 'mute') {
      iconSVG = <MuteIconSVG classNames={ classNames } onClick={ onClick } />
    }
    else if (icon === 'open') {
      iconSVG = <OpenIconSVG classNames={ classNames } onClick={ onClick } />
    }
    else if (icon === 'pause') {
      iconSVG = <PauseIconSVG classNames={ classNames } onClick={ onClick } />
    }
    else if (icon === 'play') {
      iconSVG = <PlayIconSVG classNames={ classNames } onClick={ onClick } />
    }
    else if (icon === 'sound') {
      iconSVG = <SoundIconSVG classNames={ classNames } onClick={ onClick } />
    }
  } else if (type === 'ataraxia') {
    if (icon === 'logo') {
      iconSVG = <AtaraxiaLogoIconSVG classNames={ classNames } />
    }
  }

  return iconSVG
}

const propTypes= {
  type: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  classNames: PropTypes.string
}

IconSVG.propTypes= propTypes


export default IconSVG