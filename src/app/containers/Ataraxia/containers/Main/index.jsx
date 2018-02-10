import React, { Component } from 'react'

// Components
import GoogleMap from 'google-map-react'
import IconSVG from '../IconSVG'
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
            autoPlay={ true }
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
              <span>🎊🎊🎊ESPECIAL CARNAVAL🎊🎊🎊</span>
              <br/>
              Sábado 10 de Febrero, contaremos con un invitado especial desde TENERIFE, Yeray RM
              <br/>
              Un dj capaz de poner la sala patas arriba con sus sonidos de percusión acompañado de su conga electrónica. 
              <br/>
              Como productor tiene referencias en sellos como #A100Records o #GreenMono. 
              <br/>              
              Ha sido partícipe de fiestas en #Nooctua o #Kubik compartiendo cabina con djs de la talla de Cristian Varela, Wally Lopez o #Mirkoloko.
              <br/>
              <br/>
              El carnaval está asegurado con nuestros residentes y el invitado para la ocasión en nuestra residencia mensual, CAFE LA PALMA.
              <br/>
              <br/>
              <span>📢ENTRADA GRATUITA📢</span>
              <br/>
              <span>Zona -> Malasaña (Metro Noviciado o San Bernardo)</span>
              <br/>
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
                  $hover={ true }
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
    )
  }
}

export default Main