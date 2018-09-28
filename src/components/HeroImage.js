import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { StyleSheet, css } from 'aphrodite';

class HeroImage extends React.Component{
  constructor(){
   super();
   this.state = { blah: '' }
  }

  render(){
    return(
      <div className="">
      <Container className={css(styles.HeroImage)}>
      <div className={css(styles.HeroImageTitle)}>
        Word Genius
      </div>
      </Container>
      </div>
    )
  }
}

const heroFont = {
  fontFamily: "Playfair Display, serif",
  src: "https://fonts.googleapis.com/css?family=Playfair+Display"
}

const styles = StyleSheet.create({
  HeroImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundImage: 'url(../style/images/HeroImage.jpeg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  HeroImageTitle: {
    left: '30%',
    position: 'absolute',
    fontSize: '7em',
    top: '45%',
    color: 'white',
    textShadow: 'black',
    textDecoration: 'underline',
    fontFamily: heroFont.fontFamily
  }
})

export default HeroImage;
