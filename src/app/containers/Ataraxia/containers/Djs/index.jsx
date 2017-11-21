import React, { Component } from 'react'

// Styles
import styles from './djs.css'

export class Djs extends Component {

  render() {
    const descriptionRico = (
      <div className={ styles.description }>
        Vinculado a la música electrónica desde 1996.
        <br/>
        Ha pasado por diferentes etapas logrando grandes éxitos; premiado en 2006 con un “Dj Mag” y nominado varias veces por la revista Dj One “Mejor Dj de su categoría Dj Oners”.
        <br/>
        Como dj a actuado de residente por algunas de las mejores salas del levante español, hasta llegar a su residencia más emblemática en 2004, “Pachá Torrevieja”. No iba a conformarse sólo por el este peninsular, Fabrik, La Riviera, Non, Itzela, Teatro Dolce Vita son algunas de las salas por las que ha dejado huella Rico
        Martinez.
        <br/>
        Como productor a lanzado más de 100 referencias en los últimos años editando por sellos de medio mundo: “Kubu Music”, “Factomanía”, “Sk Supreme”, “Beedroom Muzik”, “Natura Viva”, “Loko Motion”, “Soulman Music”, “Tech You Very Much”, “Deux Minds Records”, “Dark Side”, “Techaway”, “Datagroove”, “Tres14music” entre otros.
        <br/>
        En el último año se ha convertido en uno de los estandartes del deep/Tech español colocándose dentro de los 100 mejores productores. Sus tracks son sinónimo de top y éxito en pista.
      </div>
    )

    const descriptionJavi = (
      <div className={ styles.description }>
        Nacido en España, con más de 10 años de experiencia a sus espaldas como Dj, este madrileño, empezó a los 14 años de edad a introducirse en el mundo del disc-­‐ jockey. Dos años mas tarde ya estaba actuando ante el público en una de las famosas discotecas de Madrid, Pachá.
        <br/>
        Siempre ha estado a la vanguardia dentro de la electrónica, desde el hard-­‐dance y el progressive house en sus comienzos, hasta el tech house y deep house más selecto que distingue sus sets en la actualidad.
        <br/>
        Caracterizado por un estilo de groove y bass divertido, mezclado con cortes vocales underground y tropicales. Un estilo propio con mucho carácter con el que transmite al público su propia personalidad.
        <br/>
        Ha tenido la oportunidad de traspasar fronteras madrileñas en ciudades como Ávila, Guadalajara, Segovia, Ciudad Real, Toledo o la misma isla de Ibiza.
        <br/>
        Pasando por salas de renombre como FABRIK,”Supermartxé” LA RIVIERA “Reverse” “Tech In da House”, o la sala GROOVE así como clubs de música electrónica “Mini-­‐ Club”, “Xoow” “Angels” “Air Mad Music” Pirandello, Avalon…
        <br/>
        Promotor y Dj Residente de la sesión “ATARAXIA” afincada en “Café La Palma” También ha formado parte de varios festivales en España: “Amazing Summer Festival”(Ciudad Real) “Concept Festival” (Toledo), “Xtravaganzza” y “Bay Day”. Ha compartido cabina con artistas de la talla de Cristian Varela, Dj Nano, Vitalic, Eric Sneo, Felix Krocher, Uner, Marcos In Dub, Raul Mezcolanza, Oscar Aguilera, Ismael Rivas, Charles Ramirez, Freeman, Danny Leblack, Karretero, Kike Medina o Pedro Rodríguez.
        <br/>
        Para alguien de la capacidad de Javier, pinchar en España desde una edad temprana inevitablemente lo conduciría a la producción.
      </div>
    )

    const descriptionJulio = (
      <div className={ styles.description }>
        Nacido en Madrid. A sus 18 años empezó a introducirse en el mundo de la música electrónica. Todo empezó en la sesión “Danzoo” cuando descubrió que esa era su pasión.
        <br/>
        Se introdujo como Dj pinchando en las raves más multitudinarias de Madrid. Sus sets se caracterizan por un groove oscuro. Dinamismo y soltura son algunos adjetivos que definen a Julio en cabina. Los temas “retro” versionados al tech actual combinado con un bass potente hacen del artista una ecuación que fluye en pista a la perfección.
        <br/>
        Años más tarde comenzó a introducirse en el mundo de la producción musical dónde ha estado y sigue trabajando en la sombra para pulir el sonido que quiere mostrar al mundo. Poco tiempo después lanzó sus primeros tracks por el sello de “Sells Muzik”.
        <br/>
        Julio Martinez sigue trabajando fuerte en el sector de la producción para plasmar que su proyecto va adquiriendo más profesionalidad.
        <br/>
        Dj residente de la sesión ATARAXIA en “Café La Palma”, la sala “Groove”, o el festival de Ciudad Real “Bay Day” son algunos de los sitios donde Julio ha ido dejando su huella.
      </div>
    )
    return (
      <div>
        <div className={ styles.container_dj }>
          <div className={ styles.title_container }>
            <div className={ styles.title } >DJ'S</div>
            <div className={ styles.title } >RESIDENTES</div>
          </div>
          <div className={ styles.container_grid }>
            <div className={ styles.title_container }>
              <div className={ styles.title }>RICO</div>
              <div className={ styles.title }>MARTINEZ</div>
              <div className={ styles.social_networks }>
                <a className={ styles.icon } href={ 'https://www.facebook.com/ricomartinezdj' } target={ '_blank' }>
                  <img src={ '/assets/icons/ataraxia/facebook.svg' } />
                </a>
                <a className={ styles.icon } href={ 'https://www.beatport.com/artist/rico-martinez/104454' } target={ '_blank' }>
                  <img src={ '/assets/icons/ataraxia/beatport.svg' } />
                </a>
              </div>
            </div>
            <div className={ styles.photo_container }>
              <img src={ '/assets/images/ataraxia/djs/rico_martinez.png'} />
            </div>
          </div>
          { descriptionRico }
        </div>
        <div className={ styles.container_dj }>
          <div className={ `${ styles.container_grid } ${ styles.reverse }` }>
            <div className={ styles.title_container }>
              <div className={ styles.title }>JAVIER</div>
              <div className={ styles.title }>DE LA VEGA</div>
              <div className={ styles.social_networks }>
                <a className={ styles.icon } href={ 'https://www.facebook.com/javierdelavega.1990' } target={ '_blank' }>
                  <img src={ '/assets/icons/ataraxia/facebook.svg' } />
                </a>
                <a className={ styles.icon } href={ 'https://www.beatport.com/artist/javier-de-la-vega/636438' } target={ '_blank' }>
                  <img src={ '/assets/icons/ataraxia/beatport.svg' } />
                </a>
              </div>
            </div>
            <div className={ styles.photo_container }>
              <img src={ '/assets/images/ataraxia/djs/javier_de_la_vega.png'} />
            </div>
          </div>
          { descriptionJavi }
        </div>
        <div className={ styles.container_dj }>
          <div className={ styles.container_grid }>
            <div className={ styles.title_container }>
              <div className={ styles.title }>JULIO</div>
              <div className={ styles.title }>MARTINEZ</div>
              <div className={ styles.social_networks }>
                <a className={ styles.icon } href={ 'https://www.facebook.com/julio.martinezdelgado.5' } target={ '_blank' }>
                  <img src={ '/assets/icons/ataraxia/facebook.svg' } />
                </a>
                <a className={ styles.icon } href={ 'https://www.beatport.com/artist/julio-martinez/610717' } target={ '_blank' }>
                  <img src={ '/assets/icons/ataraxia/beatport.svg' } />
                </a>
              </div>
            </div>
            <div className={ styles.photo_container }>
              <img src={ '/assets/images/ataraxia/djs/julio_martinez.png'} />
            </div>
          </div>
          { descriptionJulio }
        </div>
      </div>
    )
  }
}

export default Djs