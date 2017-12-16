import React, { Component } from 'react'
import classNames from 'classnames/bind'
import cookies from 'browser-cookies'

// Containers 
import Cookies from './containers/Cookies'
import Header from './containers/Header'
import Footer from './containers/Footer'
import Events from './containers/Events'
import Main from './containers/Main'
import Menu from './containers/Menu'
import Djs from './containers/Djs'
import Working from './containers/Working'

// Config
import CONFIG from './config.json'

// Styles
import styles from './ataraxia.css'

export class Ataraxia extends Component {

  constructor(props) {
    super(props)
    this.state = {
      section: (this.props.params && this.props.params.section) ? (this.props.params.section) : 'home',
      isOpenMenu: false,
      isCookieInfoOpen: false
    }
  }

  handleMenuOpenClose = () => {
    const { isOpenMenu } = this.state

    this.setState({
      isOpenMenu: !isOpenMenu
    })
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
    const { isOpenMenu, isCookieInfoOpen } = this.state
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

    /*const menuTag = (isOpenMenu) ? (
      <Menu 
        handleMenu={ this.handleMenuOpenClose } 
        section= { this.state.section }
      />
    ) : ''*/

    const cx = classNames.bind(styles)

    const styleClass = cx({
      ataraxia_container : true,
      menuOpen: (isOpenMenu)
    })

    const cookiesInfoTag = (isCookieInfoOpen) ? (
      <div className={ styles.contanier_cookieInfo }>
        Solicitamos su permiso para obtener datos estadísticos de su navegación en esta web, en cumplimiento del Real 
        Decreto-ley 13/2012. Si continúa navegando consideramos que acepta el uso de cookies.
        <a
          onClick={ () => this.cookiesAccepted() } 
          className={ styles.info }
        >
          OK
        </a>
        <a href="/cookies/" 
          target={ "_blank" } 
          className={ styles.info }
        >
          Más información
        </a>
      </div>
    ) : ''

    return (
      <div className={ styleClass }>
        <Header 
          socialNetworks={ CONFIG.socialNetworks }
          handleMenu={ this.props.handleMenuOpen } 
        />
        { bodyTag }
        <Footer 
          socialNetworks={ CONFIG.socialNetworks }                  
          section= { this.state.section } 
        />
        { cookiesInfoTag }
      </div>
    )
  }
}

export default Ataraxia
