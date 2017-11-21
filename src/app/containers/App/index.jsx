import { PropTypes } from 'prop-types';
import React, { Component } from 'react';

import { fallDown as Menu } from 'react-burger-menu'

import styles from './app.css'

class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired
  }

  render() {


    const children = this.props.children;
    return (
      <div id={ 'outer-container' }>
        <Menu 
          pageWrapId={ "page-wrap" } 
          outerContainerId={ "outer-container" }
          burgerButtonClassName={ styles.burguer_button }
          burgerBarClassName={ styles.burguer_bars }
        >
          <a id="home" className="menu-item" href="/ataraxia">HOME</a>
          <a id="about" className="menu-item" href="/ataraxia/events">EVENTOS</a>
          <a id="contact" className="menu-item" href="/ataraxia/djs">DJ'S</a>
        </Menu>
        <main id={ 'page-wrap' }>
          { children }
        </main>
      </div>
    );

  }
}

export default App;
