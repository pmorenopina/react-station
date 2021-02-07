import React, {Component} from 'react'

// Styles
import styles from './live.css'

class Live extends Component {

  constructor(props) {
    super(props)
    this.state = {
      url_hidrated: null,
      chat_url_hidrated: null
    }
  }

  componentDidMount() {
    const { live } = this.props
    const { url, chat_url } = live
    this.setState({
      url_hidrated: url,
      chat_url_hidrated: chat_url+window.location.hostname
    })
  }

  render() {
    const {live} = this.props
    const {url_hidrated, chat_url_hidrated} = this.state
    const liveTag = (live && live.url) ? (
      <div className={
        live && live.url && !live.chat_url ? styles.container_live : styles.container_live_chat
      } >
        { live && live.url ? (
          <iframe
            className={styles.live}
            src={url_hidrated}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : null}
        { live && live.chat_url ? (
          <iframe
            className={styles.chat}
            src={chat_url_hidrated}
            frameBorder="0"
          />
        ) : null}
      </div>
    ) : (
        <h3 className={styles.notAvailable}>Broadcast currently not available</h3>
      )

    const disclaimerTag = (live && live.url) ? (
      <div className={styles.disclaimer}>
        <p>Do you have playback problems? Do you want to follow the live with the chat? Go directly to <a href={live.media} target="_blank">Youtube</a></p>
        <p>¿Tienes problemas con la reproducción? ¿Quieres seguir la retransmisión con el chat? Ir directamente a <a href={live.media} target="_blank">Youtube</a></p>
      </div>
    ) : null

    return (
      <main className={styles.container}>
        <h1 className={styles.titleMain}>LIVE STREAMING</h1>
        { liveTag}
        { disclaimerTag}
      </main>
    )
  }
}

export default Live