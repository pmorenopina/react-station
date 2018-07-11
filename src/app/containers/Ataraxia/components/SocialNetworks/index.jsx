// Libs
import React from 'react'
import { PropTypes } from 'prop-types'

// Components
import IconSVG from 'components/IconSVG'

// Styles
import styles from './socialNetworks.css'

// Header Component Definition
const SocialNetworks = ({ className, socialNetworks }) => {
  const networksTag = socialNetworks.map((item, index) => {
    return (
      <a 
        key={ index }
        className={ (index === 0) ? (`${ className } ${ styles.first }`) : (className) } 
        href={ item.url } 
        target={ '_blank' }>
        <IconSVG
          type={ 'networks' } 
          icon={ item.network }
          classNames={ styles.iconSVG }              
        />
      </a>
    )
  })

  return networksTag
}

// SocialNetworks PropTypes
SocialNetworks.propTypes = {
  className: PropTypes.string,
  socialNetworks: PropTypes.array.isRequired
}

// SocialNetworks DefaultProps
SocialNetworks.defaultProps = {
  className: null
}

export default SocialNetworks