import { PropTypes } from 'prop-types'
import React, { Component } from 'react'
import cookies from 'browser-cookies'

// Containers 
import Cookies from './containers/Cookies'
import Contact from './containers/Contact'
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
      isCookieInfoOpen: false,
      isScrollToChangeColorHeader: false,
      isScrollToChangeColorNetworks: false,
      cookiesAccepted: false
    }
  }

  checkIfCookiesAccepted = () => {
    const cookiesUUID = cookies.get('_uuid')

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
          this.setState({
            isScrollToChangeColorNetworks: true
          })
        }
        else {
          this.setState({
            isScrollToChangeColorNetworks: false
          })
        }
        if (document.documentElement.scrollTop >= 725) {
          this.setState({
            isScrollToChangeColorHeader: true
          })
        } 
        else {
          this.setState({
            isScrollToChangeColorHeader: false
          })
        }
      })
    } else {
      this.setState({
        cookiesAccepted: true
      })
      window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop >= 300) {
          this.setState({
            isScrollToChangeColorNetworks: true
          })
        } 
        else {
          this.setState({
            isScrollToChangeColorNetworks: false
          })
        }
        if (document.documentElement.scrollTop >= 725) {
          this.setState({
            isScrollToChangeColorHeader: true
          })
        } 
        else {
          this.setState({
            isScrollToChangeColorHeader: false
          })
        }
      })
    }
  }

  cookiesAccepted = () => {
    cookies.set('_uuid', Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1), {expires: 365})

    this.setState({
      isCookieInfoOpen: false,
      cookiesAccepted: true
    })
  }

  cookiesCanceled = () => {
    this.setState({
      isCookieInfoOpen: false
    })
  }

  componentDidMount() {
    this.checkIfCookiesAccepted()
  }
  

  render () {
    const { isCookieInfoOpen, cookiesAccepted } = this.state
    const { toggleOpenCloseMenu } = this.props
    let bodyTag = ''

    if (this.props.params && this.props.params.section) {
      if (this.props.params.section === 'events') {
        bodyTag = <Events />
      } else if (this.props.params.section === 'djs') {
        bodyTag = <Djs djs={ CONFIG.djs } />
      } /*else if (this.props.params.section === 'media') {
        bodyTag = <Working />
      }*/ else if (this.props.params.section === 'cookies') {
        bodyTag = <Cookies />
      } else if (this.props.params.section === 'contact') {
        bodyTag = <Contact />
      } else {
        bodyTag = (
          <Working />
        )
      }
    } else {
      bodyTag = (
        <Main cookiesAccepted={ cookiesAccepted }/>
      )
    }

    return (
      <div className={ styles.ataraxia_container }>
        <Header 
          section= { this.state.section } 
          socialNetworks={ CONFIG.socialNetworks }
          toggleOpenCloseMenu={ toggleOpenCloseMenu }
          isScrollToChangeColorHeader={ this.state.isScrollToChangeColorHeader }
          isScrollToChangeColorNetworks={ this.state.isScrollToChangeColorNetworks }
        />
        { bodyTag }
        <Footer 
          menuItems={ CONFIG.menuItems }
          socialNetworks={ CONFIG.socialNetworks }                  
          section= { this.state.section } 
        />
        <CookiesInfo 
          isCookieInfoOpen={ isCookieInfoOpen } 
          cookiesAccepted={ this.cookiesAccepted }
          cookiesCanceled={ this.cookiesCanceled }
        />
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