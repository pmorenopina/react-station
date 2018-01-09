import React, { Component } from 'react'
import { scroller } from 'react-scroll' //Imports scroller mixin, can use as scroller.scrollTo()

// Components 
import GridComponent from '../../../../components/Grid'

// Styles
import styles from './main.css'

// Config
import CONFIG from '../../config.json'

class Main extends Component {

  constructor(props) {
    super(props)
    this.state = {
      playVideo: false,
      mutedVideo: false,
      counter: 0
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
        <img 
          className={ styles.iconPlay }
          src={ '/assets/icons/play.svg' }
          onClick={ this.handlePlayPauseVideo } 
        />
        <img 
          className={ (this.state.counter >= 1) ? (`${ styles.iconExpand } ${ styles.active }`) : (styles.iconExpand) }
          src={ '/assets/icons/expand-button.svg' }
        />
        <img 
          className={ (this.state.counter >= 2) ? (`${ styles.iconExpand_second } ${ styles.active }`) : (styles.iconExpand_second) }
          src={ '/assets/icons/expand-button.svg' }
        />
        <img 
          className={ (this.state.counter >= 3) ? (`${ styles.iconExpand_third } ${ styles.active }`) : (styles.iconExpand_third) }
          src={ '/assets/icons/expand-button.svg' }
        />
      </div>
    ) : (
      <div className={ styles.iconBarVolume }>
        <img 
          className={ styles.iconPause }      
          src={ '/assets/icons/pause.svg' } 
          onClick={ this.handlePlayPauseVideo }         
        />
        <img 
          className={ styles.iconVolume }      
          src={ (!this.state.mutedVideo) ? '/assets/icons/volume.svg' : '/assets/icons/mute.svg' } 
          onClick={ this.handleMutedVideo }                   
        />
      </div>
    )

    return (
      <div className={ styles.container }>
        <div className={ styles.container_full_screen }>
          <video 
            ref={ (video) => { this.videoTag = video } }
            preload= { 'auto' }
            poster={ '/assets/videos/ataraxia/home-poster.png' }
            onPlay={ this.handlePlay }
            onVolumeChange={ this.handleVolume }
          >
            <source type={ "video/mp4" } src={ '/assets/videos/ataraxia/home-video.mp4' } />
          </video>
          { iconPlayPause }
        </div>
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
              Volvemos con fuerza para el inicio de este nuevo año 💪
              <br/>
              <br/>
              Ataraxia comienza con un set de los dj´s residentes el sábado 20 de Enero en CAFE LA PALMA
              <br/>
              <br/>
              <span>Zona -> Malasaña (Metro Noviciado o San Bernardo)</span>
              <br/>
              <span>Entrada -> GRATIS</span>
            </div>
            <div className={ styles.photo_container }>
              <img 
                id={ 'mapFake' } 
                src={ '/assets/images/ataraxia/location.png' }
                alt={ 'ΔTΔRΔXIΔ | GoogleMaps' }                
              />
              <div id={ 'map' } />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main