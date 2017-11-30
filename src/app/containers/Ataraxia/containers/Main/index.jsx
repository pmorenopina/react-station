import React from 'react'

// Components 
import GridComponent from '../../../../components/Grid'

// Styles
import styles from './main.css'

// Config
import CONFIG from '../../config.json'

const Main = () => {
  return (
    <div className={ styles.container }>
      <div className={ styles.container_full_screen }>
        <video 
          autoPlay={ true } 
          muted={ true } 
          playsInline={ true } 
          loop={ true }
          src={ '/assets/videos/ataraxia/home_video.mp4' } 
        />
      </div>
      <div className={ styles.container_next_events }>
        <div className={ styles.title_container }>
          <div className={ styles.title } >NO TE</div>
          <div className={ styles.title } >PIERDAS</div>
        </div>
        <GridComponent key={ 0 } elements={ [CONFIG.remember[0]] } oneElement= { true } />
      </div>
      <div className={ styles.container_dj }>
        <div className={ styles.container_grid }>
          <div className={ styles.description }>
            En esta ocasión, contaremos con los djs residentes para amenizaros una noche especial, en la que uno de ellos cumple años.
            <br/>
            Rico Martinez estará desde primera hora calentando la sala de máquinas con sus últimos tracks ya introducidos en el top 100 de Beatport. 
            <br/>
            Javier De La Vega & Julio Martinez Delgado pondrán el broche final en un b2b en el que la contundencia en pista no faltará para que gastes zapatilla.
            <br/><br/>
            Que no te lo cuenten !!! 
            <br/>
            ENTRADA GRATUITA
            <br/>
            <br/>
            Café La Palma (Calle La Palma nº 62, Madrid)
          </div>
          <div className={ styles.photo_container }>
            <img id={ 'mapFake' } src={ '/assets/images/ataraxia/location.png' } />
            <div id={ 'map' } />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main