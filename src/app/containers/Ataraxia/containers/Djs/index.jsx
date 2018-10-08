import React from 'react'

// Components
import IconSVG from 'components/IconSVG'

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

    return (        
      <section 
        key={ index }
        className={ styles.container_dj }
      >
        <div className={ (Math.abs(index % 2) == 1) ? (`${ styles.container_grid } ${ styles.reverse }`) : (styles.container_grid) }>
          <div className={ styles.title_container }>
            <h2 className={ styles.title }>{ item.name.toUpperCase() }</h2>
            <h2 className={ styles.title }>{ item.surname.toUpperCase() }</h2>
            <div className={ styles.social_networks }>
              { networksTag }
            </div>
          </div>
          <div className={ styles.photo_container }>
            <img 
              src={ item.photo } 
              alt={ `ΔTΔRΔXIΔ - Ataraxia Club | ${ item.name } ${ item.surname }` }
            />
          </div>
        </div>
        <p 
          className={ styles.description }
          dangerouslySetInnerHTML= { { __html: item.description } }
        />
      </section>
    )
  })

  return (
    <main className={ styles.container }>
      <h1 className={ styles.titleMain }>RESIDENT DJS</h1>
      { residentTag }
    </main>
  )
}

export default Djs