import React, { Component } from 'react';
import HeroImage from './HeroImage';
import About from './About';
import { StyleSheet, css } from 'aphrodite';

export default class App extends Component {
  render() {
    return (
      <div className={css(styles.bodyStyle)}>
       <HeroImage />
       <About />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  bodyStyle: {
    width: '100%',
    margin: '0'

  }
})
