import React, { Component } from 'react'

// Styles
import styles from './contact.css'

class Contact extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nameValue: '',
      emailValue: '',
      textValue: ''
    }
  }

  validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  handleSubmitForm = () => {
    const { nameValue, emailValue, textValue } = this.state

    if (nameValue === '') {
      alert('Por favor, rellena correctamente el campo "NOMBRE".')
    } else if (emailValue === '' || !this.validateEmail(emailValue)) {
      alert('Por favor, rellena correctamente el campo "EMAIL".')
    } else if (textValue === '' || textValue.length < 140) {
      alert('Por favor, rellena correctamente el campo "TEXTO" con un mínimo de 140 caracteres.')
    } else {
      try {
        fetch("http://139.162.220.87:8600/submitEmail", {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            sendto: 'info@ataraxiaclub.com',
            sendfrom: emailValue,
            name: nameValue,
            text: textValue
          }),
          mode: 'no-cors'
        }).then((response) => {
          if (response.statusCode === "200" || 200) {
            alert('Correo enviado. ¡Muchas gracias por contactar con nosotros!')
          } else {
            alert('UPS! Ha ocurrido un error. Manda un email desde tu correo a "info@ataraxiaclub.com". Gracias!')
          }
        })
      } catch (error) {
        alert('UPS! Ha ocurrido un error. Manda un email desde tu correo a "info@ataraxiaclub.com". Gracias!')
      }
    }
  }

  handleChangeName = (event) => {
    this.setState({
      nameValue: event.target.value
    })
  }

  handleChangeEmail = (event) => {
    this.setState({
      emailValue: event.target.value
    })
  }

  handleChangeText = (event) => {
    this.setState({
      textValue: event.target.value
    })
  }
  
  render() {

    const info = (
      <div className={ styles.container_info }>
        <div className={ styles.logo }>
          <img 
            alt={ "ΔTΔRΔXIΔ | mainLogo" }
            src={ "/assets/images/ataraxia/ataraxia.png" }
          />
        </div>
        <div className={ styles.description }>
          Ataraxia es una sesión de música electrónica caracterizada por un estilo de groove y bass divertido mezclado con cortes vocales underground y tropicales que a nadie dejará indiferente.
          <br/>
          Una fiesta divertida que desprende buen rollo, ganas de pasarlo bien y de bailar en pista desconectando de la rutina: una progresión musical acorde a cada momento para conseguir evocar una atmósfera agradable dónde se respire energía positiva.
          <br/>
          <br/>
          Ataraxia propone aire renovado en pista. Por eso se irán incluyendo artistas invitados en sus fiestas de carácter nacional que aporten frescura y calidad en sus sets.
          <br/>
          Nuestro objetivo es aportar profesionalidad y diversión a la noche madrileña a través de la música.
        </div>
      </div>
    )

    const contactForm = (
      <div className={ styles.container_form }>
        <div className={ styles.row_middle }>
          <div className={ styles.column }>
            <span>NOMBRE:</span>
            <input
              type={ 'text' }
              value={ this.state.nameValue } 
              onChange={ this.handleChangeName }
            />
          </div>
          <div className={ styles.column }>
            <span>EMAIL:</span>
            <input
              type={ 'text' }
              value={ this.state.emailValue } 
              onChange={ this.handleChangeEmail }
            />
          </div>
        </div>
        <div className={ styles.row_full }>
          <span>MENSAJE:</span>
          <textarea
            type={ 'text' }
            maxLength={ 1007 }
            value={ this.state.textValue } 
            onChange={ this.handleChangeText }
          />
        </div>
        <div className={ styles.container_submit }>
          <button
            onClick={ () => this.handleSubmitForm() }
          >
            Enviar
          </button>
        </div>  
      </div>
    )

    return (
      <div className={ styles.container }>
        <div className={ styles.container_contact }>
          <div className={ styles.title_container }>
            <div className={ styles.title } >INFO</div>
          </div>
          { info }
          <div className={ styles.title_container }>
            <div className={ styles.title } >CONTACTO</div>
          </div>
          { contactForm }
        </div>
      </div>
    )
  }
}

export default Contact