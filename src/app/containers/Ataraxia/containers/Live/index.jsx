import React from 'react'

// Styles
import styles from './live.css'

const Live = ({ live }) => {

  const liveTag = (live && live.url) ? (
    <div className={
      live && live.url && !live.chat_url ? styles.container_live : styles.container_live_chat
    } >
      { live && live.url ? (
        <iframe
          className={styles.live}
          src={live.url}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      ) : null}
      { live && live.chat_url ? (
        <iframe
          className={styles.chat}
          src={live.chat_url}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen />
      ) : null}
    </div>
  ) : (
      <h2>Broadcast currently not available</h2>
    )

  const disclaimerTag = (live && live.url) ? (
    <div className={styles.disclaimer}>
      <p>Do you have playback problems? Go directly to <a href={live.media} target="_blank">Youtube</a></p>
      <p>¿Tienes problemas con la reproducción? Ir directamente a <a href={live.media} target="_blank">Youtube</a></p>
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

export default Live