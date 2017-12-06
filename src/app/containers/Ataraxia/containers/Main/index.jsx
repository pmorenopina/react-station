import React, { Component } from 'react'
import { scroller } from 'react-scroll' //Imports scroller mixin, can use as scroller.scrollTo()

// Components 
import GridComponent from '../../../../components/Grid'

// Styles
import styles from './main.css'

// Config
import CONFIG from '../../config.json'

class Main extends Component {

  componentDidMount() {
    this.videoTag.addEventListener("ended", () => {
      this.videoTag.currentTime=0.1
      this.videoTag.play()
    })
  }

  render() {
    return (
      <div className={ styles.container }>
        <div className={ styles.container_full_screen }>
          <video 
            ref={ (video) => { this.videoTag = video } }
            autoPlay={ true } 
            muted={ true } 
            playsInline={ true }
          >
            <source type={ "video/mp4" } src={ '/assets/videos/ataraxia/home_video.mp4' } />
          </video>
          <img src={ '/assets/images/ataraxia/ataraxia.png' } />
          <img className={ styles.icon } src={ '/assets/icons/arrow_down.svg' } onClick={ () => scroller.scrollTo('main_event', { duration: 1000, delay: 100, smooth: true, offset: -136 }) }/>
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