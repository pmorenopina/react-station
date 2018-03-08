import React, { Component } from 'react'
import classNames from 'classnames/bind'

// Components
import GoogleMap from 'google-map-react'
import IconSVG from '../IconSVG'
import GridComponent from '../../../../components/Grid'

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
      mutedVideo: false,
      counter: 0
    }

    this.propsMaps = {
      center: [40.426857, -3.707992],
      zoom: 16,
    }
  }

  componentDidMount() {
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
        this.setState({
          counter: 1
        })
      } else {
        this.setState({
          counter: this.state.counter + 1
        })
      }
    }, 400)
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
              El próximo capítulo de esta sesión de música electrónica se presentará el el 24 de marzo
              <br/>
              <br/>
              <span>Rico Martinez - JavierdelaVega - Julio Martinez</span>
              <br/>
              Este es tu lugar para disfrutar de la mejor música electrónica un sábado en pleno corazón de Madrid, Malasaña.
              <br/>
              <br/>
              Lugar: <span>CAFE LA PALMA</span>
              <br/>
              Metro: <span>"San Bernardo" o "Noviciado"</span>
              <br/>
              Entrada: <span>GRATIS</span>
            </div>
            <div className={ styles.photo_container }>
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
            </div>
          </div>
        </div>
      </div>
    ) : ''
    
    const styleContainerTag = cx({
      'container_full_screen': true,
      'container_full_screen_not_only' : (CONFIG.remember.length) ? true : false
    })

    return (
      <div className={ styles.container }>
        <div className={ styleContainerTag }>
          <video 
            ref={ (video) => { this.videoTag = video } }
            preload= { 'auto' }
            poster={ '/assets/videos/ataraxia/home-poster.jpg' }
            onPlay={ this.handlePlay }
            onVolumeChange={ this.handleVolume }
          >
            <source type={ "video/mp4" } src={ '/assets/videos/ataraxia/home-video.mp4' } />
          </video>
          { iconPlayPause }
        </div>
        { mainEvent }
      </div>
    )
  }
}

export default Main