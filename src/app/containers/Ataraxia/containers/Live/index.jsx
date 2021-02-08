import React, { Component } from 'react'
import Countdown from 'react-countdown'

// Styles
import styles from './live.css'

class Live extends Component {

  constructor(props) {
    super(props)
    this.state = {
      url_hidrated: null,
      chat_url_hidrated: null,
      loadComponent: false
    }
  }

  componentDidMount() {
    const { live } = this.props
    const { url, chat_url } = live
    this.setState({
      url_hidrated: url,
      chat_url_hidrated: chat_url + window.location.hostname,
    })
    if(live && live.countDown && live.countDown.time) {
      this.setCountdown(live.countDown.time)
    }
  }

  setCountdown = (time) => {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    let birthday = time,
      countDown = new Date(birthday).getTime(),
      x = setInterval(function () {

        let now = new Date().getTime(),
          distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          let headline = document.getElementById("headline"),
            countdown = document.getElementById("countdown"),
            content = document.getElementById("content");

          headline.innerText = "It's my birthday!";
          countdown.style.display = "none";
          content.style.display = "block";

          clearInterval(x);
        }
        //seconds
      }, 0)
  }

  render() {
    const { live } = this.props
    const { url_hidrated, chat_url_hidrated, loadComponent } = this.state
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
    ) : null

    const notAvailable = (live && live.notAvailable) ? (
      <h3 className={styles.notAvailable}>{live.notAvailable}</h3>
    ) : null

    const disclaimerTag = (live && live.url) ? (
      <div className={styles.disclaimer}>
        <p>Do you have playback problems? Do you want to follow the live with the chat? Go directly to <a href={live.media} target="_blank">Youtube</a></p>
        <p>¿Tienes problemas con la reproducción? ¿Quieres seguir la retransmisión con el chat? Ir directamente a <a href={live.media} target="_blank">Youtube</a></p>
      </div>
    ) : null

    const countDown = (live && live.countDown) ? (
      <div className={styles.container}>
        <div id="countdown">
          <ul>
            <li><span id="days"></span>days</li>
            <li><span id="hours"></span>Hours</li>
            <li><span id="minutes"></span>Minutes</li>
            <li><span id="seconds"></span>Seconds</li>
          </ul>
        </div>
        <h3 id="headline">{live.countDown.text}</h3>
      </div>
    ) : null

    return (
      <main className={styles.container}>
        <h1 className={styles.titleMain}>LIVE STREAMING</h1>
        { liveTag}
        { notAvailable}
        { countDown}
        { disclaimerTag}
      </main>
    )
  }
}

export default Live