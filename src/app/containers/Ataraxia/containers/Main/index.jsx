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
          className={ styles.iconPlay }
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
          className={ (this.state.counter >= 1) ? (`${ styles.iconExpand } ${ styles.active }`) : (styles.iconExpand) }
        />
        <IconSVG
          type={ 'controls' } 
          icon={ 'arrowdown' }
          className={ (this.state.counter >= 2) ? (`${ styles.iconExpand_second } ${ styles.active }`) : (styles.iconExpand_second) }
        />
        <IconSVG
          type={ 'controls' } 
          icon={ 'arrowdown' }
          className={ (this.state.counter >= 3) ? (`${ styles.iconExpand_third } ${ styles.active }`) : (styles.iconExpand_third) }
        />
      </div>
    ) : (
      <div className={ styles.iconBarVolume }>
        <IconSVG
          type={ 'controls' } 
          icon={ 'pause' }
          className={ styles.iconPause }
          onClick={ this.handlePlayPauseVideo }                       
        />
        <IconSVG
          type={ 'controls' } 
          icon={ (!this.state.mutedVideo) ? 'sound' : 'mute' }
          className={ styles.iconVolume }      
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
            className={ styles.iconSVG }              
          />
        </div>
      </GoogleMap>
    ) : ''
    
    const nextEvent = (CONFIG.remember.length) ? (
      <section className={ styles.container_nextEvent }>
        <h1 className={ styles.title }>NEXT EVENT</h1>
        <div className={ styles.content }>
          <img 
            className={ styles.imageEvent } 
            src={ CONFIG.remember[0].portrait } 
          />
          <div className={ styles.description }>
            <h2 className={ styles.title }>CLOSING ATARAXIA JULIO 2018</h2>
            <p>
              Última fiesta antes del verano🌴
              <br/>
              Para el cierre de temporada, contaremos con un b2b muy cañero formado por <span>Cristian Cardenas</span> y <span>Luismy Jimenez</span>
              <br/>
              <br/>
              En la warm-up 21Reason abrirá con un set elegante de Deep-House.
              <br/>
              <br/>
              Todo esto acompañado de nuestros residentes Javier De La Vega & Julio MartineZ.
            </p>
          </div>
        </div>
      </section>
    ) : null

    const whoAre = (
      <section className={ styles.container_whoAre }>
        <h1 className={ styles.title }>ATARAXIA?</h1>
        <img
          className={ styles.imagePoster }
          src={ '/assets/images/ataraxia/mainposter.png' } 
        />
        <div className={ styles.container_concept }>
          <div>
            <h2>DIVERSIÓN</h2>
            <span>Disfruta del momento</span>
          </div>
          <div>
            <h2>ATMÓSFERA</h2>
            <span>Sumérgete en un mundo aparte</span>
          </div>
          <div>
            <h2>DESCONEXIÓN</h2>
            <span>Olvidate de la rutina</span>
          </div>
          <div>
            <h2>VIBRACIÓN</h2>
            <span>Deja que la música te invada</span>
          </div>
          <div>
            <h2>ENERGÍA</h2>
            <span>Siente el buen rollo en pista</span>
          </div>
          <div>
            <h2>ELECTRÓNICA</h2>
            <span>Baila al ritmo de groove y bass</span>
          </div>
        </div>
      </section>
    )
    
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
          <h1 className={ styles.title }>INSTAGRAM FEED</h1>
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
      <main className={ styles.container }>
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
        { nextEvent }
        { whoAre }
        { instagramFeed }
      </main>
    )
  }
}

export default Main