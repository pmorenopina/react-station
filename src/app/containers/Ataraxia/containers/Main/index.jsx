import React, { Component } from 'react'
import classNames from 'classnames/bind'

// Components
import GoogleMap from 'google-map-react'
import IconSVG from 'components/IconSVG'
import GridComponent from 'components/Grid'

// Styles
import styles from './main.css'

// Config
import CONFIG from '../../config.json'

const cx = classNames.bind(styles)

class Main extends Component {

  constructor(props) {
    super(props)
    this.state = {
      playVideo: false,
      mutedVideo: true,
      counter: 0,
      videoMounted: false,
      scriptLoaded: false,
    }

    this.propsMaps = {
      center: [40.426857, -3.707992],
      zoom: 16,
    }

    this.isLoadedScript = false
  }

  componentDidMount() {
    this.changeStateVideoMounted()
    this.videoTag.play()
    
    this.videoTag.addEventListener("ended", () => {
      this.videoTag.currentTime=0.1
      this.videoTag.play()
      this.videoTag.volume = 0
      this.setState({
        mutedVideo: true
      })       
    }) 
    
    setInterval(() => {
      if (this.state.counter > 3) {
        this.counterReset()
      } else {
        this.counterAdd()
      }
    }, 400)
  }

  counterReset = () => {
    this.setState({
      counter: 0
    })
  }

  counterAdd = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  changeStateVideoMounted = () => {
    this.setState({
      videoMounted: true
    })
  }

  handlePlayPauseVideo = () => {
    if (!this.state.playVideo) {
      this.videoTag.play() 
      this.setState({
        playVideo: true
      })                       
    } else {
      this.videoTag.pause()   
      this.setState({
        playVideo: false
      })                                   
    }
  }

  handlePlay = () => {
    this.setState({
      playVideo: true
    })   
  }

  handleVolume = () => {
    if (this.videoTag.volume > 0) {
      this.setState({
        mutedVideo: false
      })   
    } else {
      this.setState({
        mutedVideo: true
      }) 
    }
  }

  handleMutedVideo = () => {
    if (!this.state.mutedVideo) {
      this.videoTag.volume = 0
      this.setState({
        mutedVideo: true
      })                       
    } else {
      this.videoTag.volume = 1     
      this.setState({
        mutedVideo: false
      })                                   
    }
  }

  render() {

    const iconPlayPause = (this.state.playVideo === false) ? (
      <div className={ styles.container_play }>
        <IconSVG
          type={ 'controls' } 
          icon={ 'play' }
          classNames={ styles.iconPlay }
          onClick={ this.handlePlayPauseVideo }                       
        />
        <div className={ styles.iconLogo }>
          <img 
            alt={ 'ΔTΔRΔXIΔ | mainLogo' }              
            src={ '/assets/images/ataraxia/ataraxia.png' } 
          />
        </div>
        <IconSVG
          type={ 'controls' } 
          icon={ 'arrowdown' }
          classNames={ (this.state.counter >= 1) ? (`${ styles.iconExpand } ${ styles.active }`) : (styles.iconExpand) }
        />
        <IconSVG
          type={ 'controls' } 
          icon={ 'arrowdown' }
          classNames={ (this.state.counter >= 2) ? (`${ styles.iconExpand_second } ${ styles.active }`) : (styles.iconExpand_second) }
        />
        <IconSVG
          type={ 'controls' } 
          icon={ 'arrowdown' }
          classNames={ (this.state.counter >= 3) ? (`${ styles.iconExpand_third } ${ styles.active }`) : (styles.iconExpand_third) }
        />
      </div>
    ) : (
      <div className={ styles.iconBarVolume }>
        <IconSVG
          type={ 'controls' } 
          icon={ 'pause' }
          classNames={ styles.iconPause }
          onClick={ this.handlePlayPauseVideo }                       
        />
        <IconSVG
          type={ 'controls' } 
          icon={ (!this.state.mutedVideo) ? 'sound' : 'mute' }
          classNames={ styles.iconVolume }      
          onClick={ this.handleMutedVideo }                           
        />
      </div>
    )

    const googleMapTag = (this.props.cookiesAccepted) ? (
      <GoogleMap
        bootstrapURLKeys={ { key: 'AIzaSyBmRzfJ2tXbBlaVpykm4extXfqRLfc9nFU' } }
        center={ this.propsMaps.center }  
        zoom={ this.propsMaps.zoom }
      >
        <div 
          className={ styles.icon_container }
          lat={ 40.426857 } 
          lng={ -3.707992 }
        >
          <IconSVG
            type={ 'map' } 
            icon={ 'location' }
            classNames={ styles.iconSVG }              
          />
        </div>
      </GoogleMap>
    ) : ''

    const mainEvent = (CONFIG.remember.length) ? (
      <div className={ styles.container_main_event }>
        <div name={ 'main_event' } className={ styles.container_next_events }>
          <div className={ styles.title_container }>
            <div className={ styles.title } >NO TE</div>
            <div className={ styles.title } >PIERDAS</div>
          </div>
          <GridComponent key={ 0 } elements={ [CONFIG.remember[0]] } oneElement= { true } />
        </div>
        <div className={ styles.container_dj }>
          <div className={ styles.container_grid }>
            <div className={ styles.description }>
              <br/>
              <span>CLOSING ATARAXIA JULIO 2018</span>
              <br/>
              Última fiesta antes del verano🌴
              <br/>
              Para el cierre de temporada, contaremos con un b2b muy cañero formado por <span>Cristian Cardenas</span> y <span>Luismy Jimenez</span>
              <br/>
              En la warm-up 21Reason abrirá con un set elegante de Deep-House.
              <br/>
              Todo esto acompañado de nuestros residentes Javier De La Vega & Julio MartineZ.
              <br/>
              <br/>
              Lugar: <span>CAFE LA PALMA</span>
              Metro: <span>San Bernardo / Noviciado</span>
              Entrada: <span>GRATIS</span>
            </div>
            <div className={ styles.photo_container }>
              { googleMapTag }
            </div>
          </div>
        </div>
      </div>
    ) : ''
    
    const styleContainerTag = cx({
      'container_full_screen': true,
      'container_full_screen_not_only' : (CONFIG.remember.length) ? true : false
    })

    const styleFeed = {
      border:'none',
      overflow:'hidden',
      width: '100%',
      height: '100%'
    }

    const instagramFeed = (this.state.isLoadedScript) ? (
      <div className={ styles.container_main_feed }>
        <div className={ styles.container_feed }>
          <div className={ styles.title_container }>
            <div className={ styles.title } >INSTAGRAM</div>
            <div className={ styles.title } >FEED</div>
          </div>
          <iframe
            src={ "https://snapwidget.com/embed/535934" } 
            className={ "snapwidget-widget" } 
            frameBorder={ "0" } 
            scrolling={ "no" }
            style={ styleFeed }
          />
        </div>
      </div>
    ) : null

    if (this.state.videoMounted && !this.isLoadedScript && this.props.cookiesAccepted) {
      let code = "https://snapwidget.com/js/snapwidget.js"
      try {
        let s = document.createElement('script')
        s.setAttribute('src', code)     
        document.body.appendChild(s)
        this.isLoadedScript = true
        setTimeout(() => {
          this.setState({
            isLoadedScript: true
          })
        }, 200)
      } catch (e) {
        this.isLoadedScript = true
        setTimeout(() => {
          this.setState({
            isLoadedScript: true
          })
        }, 200)
      }
    }



    return (
      <div className={ styles.container }>
        <div className={ styleContainerTag }>
          <video 
            ref={ (video) => { this.videoTag = video } }
            preload= { 'auto' }
            poster={ '/assets/videos/ataraxia/home-poster-3.jpg' }
            onPlay={ this.handlePlay }
            onVolumeChange={ this.handleVolume }
            muted={ this.state.mutedVideo }
          >
            <source type={ "video/mp4" } src={ '/assets/videos/ataraxia/home-video-3.mp4' } />
          </video>
          { iconPlayPause }
        </div>
        { mainEvent }
        { instagramFeed }
      </div>
    )
  }
}

export default Main