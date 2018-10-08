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
import { getScrollColorHeaderBlack } from 'ataraxiaHelpers/scroll'
import getCookiesAlertAccepted from 'ataraxiaHelpers/cookies'
import insertFbAnalytics from 'ataraxiaHelpers/analytics/fb'

// Config
import GLOBAL_CONFIG from './config.json'

// Ataraxia Component Definition
export class Ataraxia extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colorHeaderBlack: false,
      isCookiesAccepted: false
    }
  }

  // Cookies Alert Acepted
  handleCookiesAccepted = () => {
    this.setState({
      isCookiesAccepted: true
    })
    cookies.set('_uuid', Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1), { expires: 365 })
  }

  // Cookies Alert Canceled
  handleCookiesCanceled = () => {
    this.setState({
      isCookiesAccepted: false
    })
    cookies.set('_uuid', 'canceled', { expires: 1 })
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
    })
  }



  render() {
    const { colorHeaderBlack, isCookiesAccepted } = this.state
    const { toggleOpenCloseMenu, params } = this.props
    let bodyTag = null
    let cookiesInfoTag = null

    // Inserts scripts analytivs
    const analyticsTag = (isCookiesAccepted) ? (
      insertFbAnalytics()
    ) : null

    // Cookies Alert GDPR
    cookiesInfoTag = (
      <CookiesInfo
        key={3}
        isCookieAccepted={isCookiesAccepted}
        cookiesAccepted={this.handleCookiesAccepted}
        cookiesCanceled={this.handleCookiesCanceled}
      />
    )

    // Routing Ataraxia
    if (params && params.section) {
      switch (params.section) {
        case 'contact':
          bodyTag = <Contact key={1} />
          break
        case 'cookies':
          cookiesInfoTag = null
          bodyTag = <Cookies key={1} />
          break
        case 'djs':
          bodyTag = <Djs key={1} djs={GLOBAL_CONFIG.djs} />
          break
        case 'events':
          bodyTag = <Events key={1} />
          break
        /*case 'media':
          break*/
        default:
          bodyTag = <Working key={1} />
          break
      }
    } else {
      bodyTag = <Main cookiesAccepted={isCookiesAccepted} />
    }

    return ([
      <Header
        key={0}
        colorHeaderBlack={colorHeaderBlack}
        section={(params.section) ? params.section : 'home'}
        shoppingActive={GLOBAL_CONFIG.shoppingActive}
        socialNetworks={GLOBAL_CONFIG.socialNetworks}
        toggleOpenCloseMenu={toggleOpenCloseMenu}
      />,
      bodyTag,
      <Footer
        key={2}
        menuItems={GLOBAL_CONFIG.menuItems}
        socialNetworks={GLOBAL_CONFIG.socialNetworks}
        section={(params.section) ? params.section : 'home'}
      />,
      cookiesInfoTag,
      analyticsTag
    ])
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