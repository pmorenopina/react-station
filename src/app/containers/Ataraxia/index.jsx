import { PropTypes } from 'prop-types'
import React, { Component } from 'react'
import cookies from 'browser-cookies'

// Containers 
import Cookies from './containers/Cookies'
import Header from './containers/Header'
import Footer from './containers/Footer'
import Events from './containers/Events'
import Main from './containers/Main'
import Djs from './containers/Djs'
import Working from './containers/Working'

// Components
import CookiesInfo from '../../components/CookiesInfo'

// Config
import CONFIG from './config.json'

// Styles
import styles from './ataraxia.css'

// Poner propTypes

export class Ataraxia extends Component {

  constructor(props) {
    super(props)
    this.state = {
      section: (this.props.params && this.props.params.section) ? (this.props.params.section) : 'home',
      isOpenMenu: false,
      isCookieInfoOpen: false
    }
  }

  checkIfCookiesAccepted = () => {
    const cookiesUUID = cookies.get('uuid')

    if (!cookiesUUID) {
      let allCookies = cookies.all()
      
      for (let cookieName in allCookies) {
        if (allCookies.hasOwnProperty(cookieName)) {
          cookies.erase(cookieName)
        }
      }

      this.setState({
        isCookieInfoOpen: true
      })

      window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop >= 300) {
          this.cookiesAccepted()
          window.removeEventListener('scroll', null)
        }
      })
    }
  }

  cookiesAccepted = () => {
    cookies.set('uuid', Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1), {expires: 365})

    this.setState({
      isCookieInfoOpen: false
    })
  }

  componentDidMount() {
    if (this.state.section === 'home') {
      window.addEventListener("load", () => {
        window.initMap()
      })
    }

    this.checkIfCookiesAccepted()
  }
  

  render () {
    const { isCookieInfoOpen, toggleOpenCloseMenu } = this.props
    let bodyTag = ''

    if (this.props.params && this.props.params.section) {
      if (this.props.params.section === 'events') {
        bodyTag = <Events />
      } else if (this.props.params.section === 'djs') {
        bodyTag = <Djs djs={ CONFIG.djs } />
      } else if (this.props.params.section === 'media') {
        bodyTag = <Working />
      } else if (this.props.params.section === 'cookies') {
        bodyTag = <Cookies />
      } else {
        bodyTag = (
          <Working />
        )
      }
    } else {
      bodyTag = (
        <Main />
      )
    }

    return (
      <div className={ styles.ataraxia_container }>
        <Header 
          socialNetworks={ CONFIG.socialNetworks }
          toggleOpenCloseMenu={ toggleOpenCloseMenu } 
        />
        { bodyTag }
        <Footer 
          menuItems={ CONFIG.menuItems }
          socialNetworks={ CONFIG.socialNetworks }                  
          section= { this.state.section } 
        />
        <CookiesInfo isCookieInfoOpen={ isCookieInfoOpen } />
      </div>
    )
  }

  static propTypes = {
    params: PropTypes.object,
    isCookieInfoOpen: PropTypes.bool,
    toggleOpenCloseMenu: PropTypes.func
  }
}


export default Ataraxia