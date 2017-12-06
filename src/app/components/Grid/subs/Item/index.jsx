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
      <div className={ styles.info_container }>
        <div className={ styles.date }>{ item.date }</div>
        <div className={ styles.location }>{ item.location }</div>
        <div className={ styles.city }>{ item.city }</div>
      </div>
    ) : ''

    const styleContainerTag = cx({
      'item_full': !fourElements,
      'item_four_columns' : fourElements
    })

    const hoverElement = (this.state.hoverState && !fourElements) ? (
      <div className={ styles.container_hover }>
        <div className={ styles.photo }>
          <img 
            src={ item['portrait'] } 
            alt={ `ΔTΔRΔXIΔ | ${ item.date }` } 
          />
        </div>
        <div className={ styles.description }>
          <div className={ styles.date }>{ item.date }</div>
          <div className={ styles.location }>{ item.location }</div>
          <div className={ styles.city }>{ item.city }</div>
          <a 
            href={ 'http://www.cafelapalma.com/evento/ataraxia-especial-nochebuena/' } 
            target={ '_blank' } 
            className={ styles.buy }
          >
            Comprar
          </a>
        </div>
      </div>      
    ) : ''

    const portraitMobile = (!fourElements) ? (
      <div 
        className={ styles.item_full_mobile }
        onMouseEnter={ (!fourElements) ? this.handleHoverElement : '' }
        onMouseLeave={ (!fourElements) ? this.handleHoverElement : '' }        
      >
        <img 
          className={ styles.item_img } 
          src={ item['portrait'] } 
          alt={ `ΔTΔRΔXIΔ | ${ item.date }` } 
        />
        <div className={ styles.info_container }>
          <div className={ styles.date }>{ item.date }</div>
          <div className={ styles.location }>{ item.location }</div>
          <div className={ styles.city }>{ item.city }</div>
          <a 
            href={ 'http://www.cafelapalma.com/evento/ataraxia-especial-nochebuena/' } 
            target={ '_blank' } 
            className={ styles.buy }
          >
            Comprar
          </a>
        </div>
      </div>
    ) : ''

    const resultTag = (fourElements) ? (
      <div 
        className={ styleContainerTag }
        onMouseEnter={ (!fourElements) ? this.handleHoverElement(true) : '' }
        onMouseLeave={ (!fourElements) ? this.handleHoverElement(false) : '' }        
      >
        { hoverElement }
        <img 
          className={ styles.item_img } 
          src={ item[typeImage] } 
          alt={ `ΔTΔRΔXIΔ | ${ item.date }` } 
        />
        { infoTag }
      </div>
    ) : (
      <div>
        <div 
          className={ styleContainerTag }
          onMouseEnter={ (!fourElements) ? this.handleHoverElement : '' }
          onMouseLeave={ (!fourElements) ? this.handleHoverElement : '' }        
        >
          { hoverElement }
          <img 
            className={ styles.item_img } 
            src={ item[typeImage] } 
            alt={ `ΔTΔRΔXIΔ | ${ item.date }` } 
          />
          { infoTag }
        </div>
        { portraitMobile }
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