import { PropTypes } from 'prop-types'
import React, { Component } from 'react'

// Containers
import BurgerMenu from '../Ataraxia/containers/BurguerMenu'

// Styles 
import styles from './app.css'

// Config
import CONFIG from '../Ataraxia/config.json'

class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      isMenuOpen: false
    }
  }

  toggleOpenCloseMenu = (isMenuOpen) => {
    this.setState({
      isMenuOpen: isMenuOpen
    })
  }

  handlerBugerMenuState = (state) => {
    if (state.isOpen) {
      document.getElementsByTagName('html')[0].style.overflow = 'hidden'
      document.getElementsByTagName('body')[0].style.overflow = 'hidden'         
    } else {
      document.getElementsByTagName('html')[0].style.overflow = ''      
      document.getElementsByTagName('body')[0].style.overflow = ''         
    }

    this.toggleOpenCloseMenu(state.isOpen)
  }

  render() {
    const children = this.props.children

    let childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, { toggleOpenCloseMenu: this.toggleOpenCloseMenu }))

    return (
      <div id={ 'outer-container' } className={ styles.outer_container }>
        <BurgerMenu 
          isMenuOpen={ this.state.isMenuOpen } 
          handlerBugerMenuState={ this.handlerBugerMenuState } 
          menuItems={ CONFIG.menuItems }
          socialNetworks={ CONFIG.socialNetworks }
          section={ (this.props.params.section) ? this.props.params.section : 'home' }
        />
        <main id={ 'page-wrap' }>
          { childrenWithProps }
        </main>
      </div>
    )
  }
}

export default App