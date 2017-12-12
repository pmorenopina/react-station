import { PropTypes } from 'prop-types'
import React, { Component } from 'react'

// Components
import { elastic as Menu } from 'react-burger-menu'

// Styles 
import styles from './app.css'

class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      isOpenMenu: false
    }
  }

  handleMenuOpen = (isOpenMenu) => {
    if (isOpenMenu) {
      document.getElementsByTagName('html')[0].style.overflow = 'hidden'
      document.getElementsByTagName('body')[0].style.overflow = 'hidden'   
    } else {
      document.getElementsByTagName('html')[0].style.overflow = ''      
      document.getElementsByTagName('body')[0].style.overflow = ''         
    }

    this.setState({
      isOpenMenu: isOpenMenu
    })
  }

  isOpenMenuState = (state) => {
    if (state.isOpen) {
      document.getElementsByTagName('html')[0].style.overflow = 'hidden'
      document.getElementsByTagName('body')[0].style.overflow = 'hidden'         
    } else {
      document.getElementsByTagName('html')[0].style.overflow = ''      
      document.getElementsByTagName('body')[0].style.overflow = ''         
    }

    this.setState({
      isOpenMenu: state.isOpen
    })
  }

  render() {
    

    const children = this.props.children

    let childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, { handleMenuOpen: this.handleMenuOpen }))

    let stylesMenu = {
      bmMenuWrap: {
        height: '100vh'
      }
    }

    return (
      <div id={ 'outer-container' } className={ styles.outer_container }>
        <Menu 
          styles={ stylesMenu }
          isOpen={ this.state.isOpenMenu }
          customBurgerIcon={ false }
          customCrossIcon={ <img src={ '/assets/icons/close.svg' } /> }
          pageWrapId={ "page-wrap" } 
          outerContainerId={ "outer-container" } 
          menuClassName={ styles.bm_menu }
          onStateChange={ this.isOpenMenuState }
        >
          <a key="0" href={ '/' }>
            <img
              src={ '/assets/icons/home-button.svg' } 
              alt={ 'ΔTΔRΔXIΔ | icon' }              
            />
            <span>HOME</span>
          </a>
          <a key="1" href={ '/events/' }>
            <img
              src={ '/assets/icons/rate-star-button.svg' } 
              alt={ 'ΔTΔRΔXIΔ | icon' }              
            />
            <span>EVENTOS</span>
          </a>
          <a key="2" href={ '/djs/' }>
            <img
              src={ '/assets/icons/play-arrow.svg' } 
              alt={ 'ΔTΔRΔXIΔ | icon' }              
            />
            <span>DJ'S</span>
          </a>
          <a key="3" href={ '/media/' }>
            <img
              src={ '/assets/icons/compact-disc.svg' } 
              alt={ 'ΔTΔRΔXIΔ | icon' }              
            />
            <span>MEDIA</span>
          </a>
          <div className={ styles.container_logo }>
            <img 
              className={ styles.logo } 
              src={ '/assets/icons/ataraxia/logo.svg' } 
              alt={ 'ΔTΔRΔXIΔ | mainLogo' }              
            />
          </div>
          <div className={ styles.container_networks }>
            <a className={ `${ styles.icon_social } ${ styles.first }` } href={ 'https://www.facebook.com/ataraxiaclub/' } target={ '_blank' }>
              <img 
                src={ '/assets/icons/ataraxia/facebook_white.svg' } 
                alt={ 'ΔTΔRΔXIΔ | FacebookIcon' }                
              />
            </a>
            <a className={ styles.icon_social } href={ 'https://www.instagram.com/ataraxia_club/' } target={ '_blank' }>
              <img 
                src={ '/assets/icons/ataraxia/instagram_white.svg' } 
                alt={ 'ΔTΔRΔXIΔ | InstagramIcon' }                
              />
            </a>
            <a className={ styles.icon_social } href={ 'https://www.youtube.com/user/JavyDeejay' } target={ '_blank' }>
              <img 
                src={ '/assets/icons/ataraxia/youtube_white.svg' } 
                alt={ 'ΔTΔRΔXIΔ | YoutubeIcon' }                
              />
            </a>
          </div>
          <div className={ styles.container_text }>
            info@ataraxiaclub.com
          </div>
        </Menu>
        <main id={ 'page-wrap' }>
          { childrenWithProps }
        </main>
      </div>
    )
  }
}

export default App
