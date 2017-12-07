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
            autoPlay={ true }
            preload= { 'auto' }
            poster={ '/assets/videos/ataraxia/home-poster.png' }
            onPlay={ this.handlePlay }
            onVolumeChange={ this.handleVolume }
          >
            <source type={ "video/mp4" } src={ '/assets/videos/ataraxia/home-video.mp4' } />
            <source type={ 'video/webm' } src={ '/assets/videos/ataraxia/home-video.webm' } />
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
              <span>24 de Diciembre... NOCHEBUENA</span>
              <br/>
              Desde CAFE LA PALMA presentamos una fiesta especial en navidades hasta las 07:00 de la mañana.
              <br/>
              <br/>
              Contaremos con una cabina formada por:
              <br/>
              <br/>
              <span>LOS RESIDENTES:</span>
              <br/>
              🎧 Rico Martinez - Premiado en 2006 con un DJ Mag, nominado varias veces por la revista #Dj_One como “Mejor Dj de su categoría Dj Oners”. Sus tracks son sinónimo de top 100 en Beatport.
              <br/>
              🎧 Javier De La Vega - Fundador de Ataraxia, con más de 10 años de experiencia pinchando en sesiones como The Reverse World, SUPERMARTXÉ o Amazing Summer Festiv.
              <br/>
              🎧 Julio MartineZ - Fundador de Ataraxia, trabaja para el sello discográfico #Sellsmuzik. Ha pinchado para festivales como Bay Day.
              <br/>
              <br/>
              <span>LOS INVITADOS:</span>
              <br/>
              🎧 Aram Cejudo - Responsable de "Clown Madrid" participando en diversas sesiones como Smiley Club, Comba o The Warehouse.
              <br/> 
              🎧 Abel Suarez - De la sierra norte de Madrid, es uno de los creadores del sello Clepsidria Productions. 
              <br/>
              🎧 Omar Ortiz - Miembro del colectivo Zoundplay Music.
              <br/>
              <br/>
              <span>ENTRADAS ANTICIPADAS:</span>
              <span>15€ x 2 copas</span>
              <br/>
              <br/>
              Una fiesta cuidada al detalle para que pases una noche especial por NAVIDAD.
              <br/>
              <br/>
              Café La Palma (Calle La Palma nº 62, Madrid)
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