import React, { Component } from 'react';
import HeroImage from './HeroImage';
import Reviews from './Reviews';
import About from './About';
import { StyleSheet, css } from 'aphrodite';
import TextAnalyzer from '../containers/TextAnalyzer';
import { Route, HashRouter as Router } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
       <div className={css(styles.bodyStyle)}>
         <HeroImage />
         <Reviews />
         <Route exact path='/' component={ About } />
         <Route exact path='/TextAnalyzer' component={ TextAnalyzer } />
       </div>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  bodyStyle: {
    width: '100%',
    margin: '0'

  }
})

/*import React, { Component } from 'react';
import Header from '../containers/Header';
import SearchBar from '../containers/SearchBar';
import JSPlayGround from '../containers/JSPlayGround';
import LandingPage from './LandingPage';

import { HashRouter, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div>
        <Header />
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/Search' component={SearchBar} />
        <Route path='/JSPlayGround' component={JSPlayGround} />
      </div>
      </HashRouter>
    );
  }
}

*/
