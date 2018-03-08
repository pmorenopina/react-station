import React from 'react'

// Components
import IconSVG from '../IconSVG'

// Styles
import styles from './djs.css'

const Djs = ({ djs }) => {

  const residentTag = djs[0].resident.map((item, index) => {
    const networksTag = item.networks.map((network, index) => {
      return (
        <a 
          key= { index }
          className={ styles.icon } 
          href={ network[Object.keys(network)] } 
          target={ '_blank' }
        >
          <IconSVG
            type={ 'networks' } 
            icon={ Object.keys(network)[0] }
            classNames={ styles.iconSVG }              
          />
        </a>
      )
    })

    const mainTitle = (index === 0) ? (
      <div className={ styles.title_container }>
        <div className={ styles.title } >DJ'S</div>
        <div className={ styles.title } >RESIDENTES</div>
      </div>
    ) : ''

    return (        
      <div 
        key={ index }
        className={ styles.container_dj }
      >
        { mainTitle }
        <div className={ (Math.abs(index % 2) == 1) ? (`${ styles.container_grid } ${ styles.reverse }`) : (styles.container_grid) }>
          <div className={ styles.title_container }>
            <div className={ styles.title }>{ item.name.toUpperCase() }</div>
            <div className={ styles.title }>{ item.surname.toUpperCase() }</div>
            <div className={ styles.social_networks }>
              { networksTag }
            </div>
          </div>
          <div className={ styles.photo_container }>
            <img 
              src={ item.photo } 
              alt={ `ΔTΔRΔXIΔ | ${ item.name } ${ item.surname }` }
            />
          </div>
        </div>
        <div 
          className={ styles.description } 
          dangerouslySetInnerHTML={ { __html: item.description } } 
        />
      </div>
    )
  })

  return (
    <div className={ styles.container }>
      { residentTag }
    </div>
  )
}

export default Djs