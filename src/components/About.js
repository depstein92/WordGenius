import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Cards } from 'semantic-ui-react';

const About = () => {
   return(
     <div className={css(style.aboutContainer)}>

     </div>
   )
}

const style = StyleSheet.create({
   aboutContainer: {
     height:'100vh',
     width: '100vw',
     backgroundColor: '#E9FDFE',
     borderStyle: 'solid',
     top: '98vh',
     position: 'absolute'
  }
})

export default About;
