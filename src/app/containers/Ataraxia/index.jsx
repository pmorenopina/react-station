// Libs
import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import cookies from 'browser-cookies'

// Containers 
import Cookies from 'ataraxiaContainers/Cookies'
import Contact from 'ataraxiaContainers/Contact'
import Header from 'ataraxiaContainers/Header'
import Footer from 'ataraxiaContainers/Footer'
import Events from 'ataraxiaContainers/Events'
import Main from 'ataraxiaContainers/Main'
import Djs from 'ataraxiaContainers/Djs'
import Working from 'ataraxiaContainers/Working'

// Components
import CookiesInfo from 'components/CookiesInfo'

// Helpers
import { getScrollColorHeaderBlack, getScrollColorNetworksBlack } from 'ataraxiaHelpers/scroll'
import getCookiesAlertAccepted from 'ataraxiaHelpers/cookies'

// Config
import GLOBAL_CONFIG from './config.json'

// Styles
import styles from './ataraxia.css'

// Ataraxia Component Definition
export class Ataraxia extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colorHeaderBlack: false,
      colorNetworksBlack: false,
      isCookiesAccepted: false
    }
  }

  // Cookies Alert Acepted
  handleCookiesAccepted = () => {
    this.setState({
      isCookiesAccepted: true
    })
    cookies.set('_uuid', Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1), {expires: 365})
  }

  // Cookies Alert Canceled
  handleCookiesCanceled = () => {
    this.setState({
      isCookiesAccepted: false
    })
    cookies.set('_uuid', 'canceled', {expires: 1})
  }

  componentDidMount() {
    // Cookies Alert GDPR Logic
    this.controlCookiesAlert()

    // Scroll Event Color
    window.addEventListener('scroll', () => {
      this.controlSrollColor()
    })
  }

  // Set state to control cookies alert
  controlCookiesAlert = () => {
    this.setState({
      isCookiesAccepted: getCookiesAlertAccepted()
    })
  }

  // Set state to control black color to header & networks
  controlSrollColor = () => {
    this.setState({
      colorHeaderBlack: getScrollColorHeaderBlack(),
      colorNetworksBlack: getScrollColorNetworksBlack()
    })
  }
  
  render () {
    const { colorHeaderBlack, colorNetworksBlack, isCookiesAccepted } = this.state
    const { toggleOpenCloseMenu, params } = this.props
    let bodyTag = null
    let cookiesInfoTag = null

    // Cookies Alert GDPR
    cookiesInfoTag = (
      <CookiesInfo 
        isCookieAccepted={ isCookiesAccepted } 
        cookiesAccepted={ this.handleCookiesAccepted }
        cookiesCanceled={ this.handleCookiesCanceled }
      />
    )

    // Routing Ataraxia
    if (params && params.section) {
      switch (params.section) {
        case 'contact':
          bodyTag = <Contact />
          break
        case 'cookies':
          cookiesInfoTag = null
          bodyTag = <Cookies />
          break
        case 'djs':
          bodyTag = <Djs djs={ GLOBAL_CONFIG.djs } />
          break
        case 'events':
          bodyTag = <Events />
          break
        /*case 'media':
          break*/
        default:
          bodyTag = <Working />
          break
      }
    } else {
      bodyTag = <Main cookiesAccepted={ isCookiesAccepted }/>
    }

    return (
      <div className={ styles.ataraxia_container }>
        <Header 
          colorHeaderBlack={ colorHeaderBlack }
          colorNetworksBlack={ colorNetworksBlack }
          section= { (params.section) ? params.section : 'home' } 
          shoppingActive={ GLOBAL_CONFIG.shoppingActive }
          socialNetworks={ GLOBAL_CONFIG.socialNetworks }
          toggleOpenCloseMenu={ toggleOpenCloseMenu }
        />
        { bodyTag }
        <Footer 
          menuItems={ GLOBAL_CONFIG.menuItems }
          socialNetworks={ GLOBAL_CONFIG.socialNetworks }                  
          section= { (params.section) ? params.section : 'home' } 
        />
        { cookiesInfoTag }
      </div>
    )
  }
}

// Ataraxia PropTypes
Ataraxia.propTypes = {
  toggleOpenCloseMenu: PropTypes.func,
  params: PropTypes.object
}

// Ataraxia DefaultProps
Ataraxia.defaultProps = {
  toggleOpenCloseMenu: null,
  params: null
}

export default Ataraxia