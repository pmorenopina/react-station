// Libs
import React from 'react'
import { PropTypes } from 'prop-types'

// Ataraxia SVG Components
import AtaraxiaLogoIconSVG from './ataraxia/logo'

// Controls SVG Components
import ArrowDownIconSVG from './controls/arrowdown'
import CloseIconSVG from './controls/close'
import MuteIconSVG from './controls/mute'
import OpenIconSVG from './controls/open'
import PauseIconSVG from './controls/pause'
import PlayIconSVG from './controls/play'
import SoundIconSVG from './controls/sound'

// Map SVG Components
import LocationIconSVG from './map/location'

// Menu SVG Components
import ContactIconSVG from './menu/contact'
import DjsIconSVG from './menu/djs'
import EventsIconSVG from './menu/events'
import HomeIconSVG from './menu/home'
import MediaIconSVG from './menu/media'

// Networks SVG Components
import BeatportIconSVG from './networks/beatport'
import FacebookIconSVG from './networks/facebook'
import GmailIconSVG from './networks/gmail'
import InstagramIconSVG from './networks/instagram' 
import YoutubeIconSVG from './networks/youtube'

// IconSVG Definition Component
const IconSVG = ({ type, icon, className, onClick }) => {

  let iconSVG = null

  switch (type) {
    case 'ataraxia':
      switch (icon) {
        case 'logo':
          iconSVG = <AtaraxiaLogoIconSVG className={ className } />
          break
      }
      break
    case 'controls':
      switch (icon) {
        case 'arrowdown':
          iconSVG = <ArrowDownIconSVG className={ className } />
          break
        case 'close':
          iconSVG = <CloseIconSVG className={ className } />
          break
        case 'mute':
          iconSVG = (
            <MuteIconSVG 
              className={ className } 
              onClick={ onClick } 
            />
          )
          break
        case 'open':
          iconSVG = (
            <OpenIconSVG 
              className={ className } 
              onClick={ onClick } 
            />
          )
          break
        case 'pause':
          iconSVG = (
            <PauseIconSVG 
              className={ className } 
              onClick={ onClick } 
            />
          )
          break
        case 'play':
          iconSVG = (
            <PlayIconSVG 
              className={ className } 
              onClick={ onClick } 
            />
          )
          break
        case 'sound':
          iconSVG = (
            <SoundIconSVG 
              className={ className } 
              onClick={ onClick } 
            />
          )
          break
      }
      break
    case 'map':
      switch (icon) {
        case 'location':
          iconSVG = <LocationIconSVG className={ className } />
          break
      }
      break
    case 'menu':
      switch (icon) {
        case 'home':
          iconSVG = <HomeIconSVG className={ className } />
          break
        case 'events':
          iconSVG = <EventsIconSVG className={ className } />
          break
        case 'djs':
          iconSVG = <DjsIconSVG className={ className } />
          break
        case 'media':
          iconSVG = <MediaIconSVG className={ className } />
          break
        case 'contact':
          iconSVG = <ContactIconSVG className={ className } />
          break
      }
      break
    case 'networks':
      switch (icon) {
        case 'beatport':
          iconSVG = <BeatportIconSVG className={ className } />
          break
        case 'facebook':
          iconSVG = <FacebookIconSVG className={ className } />
          break
        case 'gmail':
          iconSVG = <GmailIconSVG className={ className } />
          break
        case 'instagram':
          iconSVG = <InstagramIconSVG className={ className } />
          break
        case 'youtube':
          iconSVG = <YoutubeIconSVG className={ className } />
          break
      }
      break
  }

  return iconSVG
}

// IconSVG PropTypes
IconSVG.propTypes = {
  type: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  className: PropTypes.string
} 

// IconSVG Default Props
IconSVG.defaultProps = {
  className: null
}

export default IconSVG