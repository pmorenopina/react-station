import { connect } from 'react-redux'
import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import classNames from 'classnames/bind'

// Styles
import styles from './styles.css'

const cx = classNames.bind(styles)

class Item extends Component {

  render() {
    const { fourElements, item } = this.props
    const typeImage = (fourElements) ? 'portrait' : 'landscape'

    const infoTag = (fourElements) ? (
      <div className={ styles.info_container }>
        <div className={ styles.date }>{ item.date }</div>
        <div className={ styles.location }>{ item.location }</div>
        <div className={ styles.city }>{ item.city }</div>
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
        <img className={ styles.item_img } src={ item[typeImage] } />
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