import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Segment, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const About = () => {
  return(
    <div className={css(style.aboutContainer)}>
      <span className={css(style.aboutTitle)}>About: </span>
      <Segment raised className={css(style.segment)}>
       <br />
       <br />
       <p className={css(style.paragraph)}>
       WordGenius is an text analyzer app that measures a conversations tone.
       </p>
       <br />
       <br />
       <p className={css(style.paragraph)}>
       Based on IBM Watson keyword processing, it measures
       </p>
       <br />
       <br />
       <p className={css(style.paragraph)}>
       the emotional tones of a conversation.
       </p>
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <Link to="/TextAnalyzer">
        <Button content='Try WordGenius'
                icon='right arrow'
                labelPosition='right' />
       </Link>
      </Segment>
    </div>
  )
}

const font = {
  fontFamily: "Playfair Display, serif",
  src: "https://fonts.googleapis.com/css?family=Playfair+Display"
}

const style = StyleSheet.create({
  aboutContainer: {
    height: '100vh',
    width: '100vw',
    top: '200vh',
    position: 'absolute',
    borderStyle: 'solid',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderTop: 'black'
  },
  aboutTitle:{
    fontFamily: font.fontFamily,
    fontSize: '5em',
    position: 'relative'

  },
  segment: {
    height: '60vh',
    width: '60vw'
  },
  paragraph: {
    fontSize: '2em',
    fontFamily: font.fontFamily
  }
})

export default About;
