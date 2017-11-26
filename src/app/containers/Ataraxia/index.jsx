import React, { Component } from 'react'
import classNames from 'classnames/bind'

// Containers 
import Header from './containers/Header'
import Footer from './containers/Footer'
import Events from './containers/Events'
import Menu from './containers/Menu'
import Djs from './containers/Djs'
import Working from './containers/Working'

// Styles
import styles from './ataraxia.css'

export class Ataraxia extends Component {

  constructor(props) {
    super(props)
    this.state = {
      section: (this.props.params && this.props.params.section) ? (this.props.params.section) : 'home',
      isOpenMenu: false,
    }
  }

  handleMenuOpenClose = () => {
    const { isOpenMenu } = this.state

    this.setState({
      isOpenMenu: !isOpenMenu
    })
  }

  render () {
    const { isOpenMenu } = this.state
    let bodyTag = ''
    if (this.props.params && this.props.params.section) {
      if (this.props.params.section === 'events') {
        bodyTag = <Events />
      } else if (this.props.params.section === 'djs') {
        bodyTag = <Djs />
      } else {
        bodyTag = (
          <Working />
        )
      }
    } else {
      bodyTag = (
        <Working />
      )
    }

    const menuTag = (isOpenMenu) ? (
      <Menu 
        handleMenu={ this.handleMenuOpenClose } 
        section= { this.state.section }
      />
    ) : ''

    const cx = classNames.bind(styles)

    const styleClass = cx({
      ataraxia_container : true,
      menuOpen: (isOpenMenu)
    })

    return (
      <div className={ styleClass }>
        { menuTag }
        <Header handleMenu={ this.handleMenuOpenClose } />
        { bodyTag }
        <Footer section= { this.state.section } />
      </div>
    )
  }
}

export default Ataraxia
