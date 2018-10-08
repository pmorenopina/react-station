import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import classNames from 'classnames/bind'

// Styles
import styles from './item.css'

const cx = classNames.bind(styles)

class Item extends Component {

  constructor(props) {
    super(props)
    this.state = {
      hoverState: false
    }
  }

  handleHoverElement = () => {
    this.setState({
      hoverState: !this.state.hoverState
    })
  }

  render() {

    const { fourElements, item } = this.props
    const typeImage = (fourElements) ? 'portrait' : 'landscape'

    const infoTag = (fourElements) ? (
      <div className={styles.info_container}>
        <h2>{item.date}</h2>
        <div className={styles.location}>{item.location}</div>
        <div className={styles.city}>{item.city}</div>
      </div>
    ) : ''

    const styleContainerTag = cx({
      'item_full': !fourElements,
      'item_four_columns': fourElements
    })

    const buyTag = (false) ? (
      <a
        href={'http://www.cafelapalma.com/evento/ataraxia-especial-nochebuena/'}
        target={'_blank'}
        className={styles.buy}
      >
        Comprar
      </a>
    ) : ''

    //const hoverElement = (this.state.hoverState && !fourElements) ? (
    const hoverElement = (false) ? (
      <div className={styles.container_hover}>
        <div className={styles.photo}>
          <img
            src={item['portrait']}
            alt={`${item.name}`}
          />
        </div>
        <div className={styles.description}>
          <div className={styles.date}>{item.date}</div>
          <div className={styles.location}>{item.location}</div>
          <div className={styles.city}>{item.city}</div>
          {buyTag}
        </div>
      </div>
    ) : ''

    const portraitMobile = (!fourElements) ? (
      <div className={styles.item_full_mobile}>
        <img
          className={styles.item_img}
          src={item['portrait']}
          alt={`${item.name}`}
        />
        <div className={styles.info_container}>
          <div className={styles.date}>{item.date}</div>
          <div className={styles.location}>{item.location}</div>
          <div className={styles.city}>{item.city}</div>
          {buyTag}
        </div>
      </div>
    ) : ''

    const resultTag = (fourElements) ? (
      <div
        className={styleContainerTag}
        onMouseEnter={(!fourElements) ? () => this.handleHoverElement(true) : null}
        onMouseLeave={(!fourElements) ? () => this.handleHoverElement(false) : null}
      >
        {hoverElement}
        <div className={styles.degradatedBrackground}>
          <img
            className={styles.item_img}
            src={item[typeImage]}
            alt={`${item.name}`}
          />
        </div>
        {infoTag}
      </div>
    ) : (
        <div>
          <div
            className={styleContainerTag}
            onMouseEnter={(!fourElements) ? () => this.handleHoverElement(true) : null}
            onMouseLeave={(!fourElements) ? () => this.handleHoverElement(false) : null}
          >
            {hoverElement}
            <img
              className={styles.item_img}
              src={item[typeImage]}
              alt={`${item.name}`}
            />
            {infoTag}
          </div>
          {portraitMobile}
        </div>
      )

    return resultTag
  }
}

const propTypes = {
  fourElements: PropTypes.bool,
  item: PropTypes.object,
  tag: PropTypes.string
}

Item.propTypes = propTypes

export default Item