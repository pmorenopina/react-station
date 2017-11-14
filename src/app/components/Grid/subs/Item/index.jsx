import { connect } from 'react-redux'
import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import classNames from 'classnames/bind'

// Styles
import styles from './styles.css'

const cx = classNames.bind(styles)

class Item extends Component {

  render() {
    const { fourElements, item, tag } = this.props

    const infoTag = (fourElements) ? (
      <div className={ styles.info_container }>
        <div className={ styles.day }>21/10/2017</div>
        <div className={ styles.location }>Café La Palma</div>
        <div className={ styles.city }>Madrid España</div>
        <div className={ styles.more_info_icon } />
      </div>
    ) : ''

    const styleContainerTag = cx({
      'item_full': !fourElements,
      'item_four_columns' : fourElements
    })
    
    return (
      <div 
        className={ styleContainerTag }
      >
        <img className={ styles.item_img } src={ `/assets/images/ataraxia/${ tag }.png` } />
        { infoTag }
      </div>

    )
  }
}

const propTypes = {
  fourElements: PropTypes.bool,
  item: PropTypes.object,
  tag: PropTypes.string
}

Item.propTypes = propTypes


export default Item