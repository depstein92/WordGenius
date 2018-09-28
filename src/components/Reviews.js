import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Card, Icon, Image } from 'semantic-ui-react';

const Reviews = () => {
   return(
     <div className={css(style.aboutContainer)}>
     <span className={css(style.ReviewTitle)}>
      Reviews:
     </span>
     <div className={css(style.firstCard)}>
      <Card>
       <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
       <Card.Content>
        <Card.Header>Matthew</Card.Header>
        <Card.Meta>
          <span className='date'>
            Joined in 2015
          </span>
       </Card.Meta>
        <Card.Description>
           I get nervous talking texting new people on
           Tinder. This app helped me make a good impression!
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
        <Icon name='user' />
           22 Friends
        </a>
       </Card.Content>
      </Card>
    </div>
    <div className={css(style.secondCard)}>
     <Card>
      <Image src='https://react.semantic-ui.com/images/avatar/large/elliot.jpg' />
      <Card.Content>
       <Card.Header>Rick</Card.Header>
       <Card.Meta>
         <span className='date'>
           Joined in 2015
         </span>
      </Card.Meta>
       <Card.Description>
          Love this App! I get Nervous When
          texting new People through linkedIn,
          butnow I Know!
       </Card.Description>
     </Card.Content>
     <Card.Content extra>
       <a>
       <Icon name='user' />
          22 Friendsw
       </a>
      </Card.Content>
     </Card>
   </div>
   <div className={css(style.thirdCard)}>
    <Card>
     <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' />
     <Card.Content>
      <Card.Header>Tristan</Card.Header>
      <Card.Meta>
        <span className='date'>
          Joined 2018
        </span>
     </Card.Meta>
      <Card.Description>
      This app helped me evaluate my texts to coworkers.
      I now know how to say the things I want more appropriate.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
      <Icon name='user' />
         30 Friends
      </a>
     </Card.Content>
    </Card>
  </div>
     </div>
   )
}

const font = {
  fontFamily: "Playfair Display, serif",
  src: "https://fonts.googleapis.com/css?family=Playfair+Display"
}

const style = StyleSheet.create({
  aboutContainer: {
    height:'100vh',
    width: '100vw',
    backgroundColor: '#F5FEFE',
    borderStyle: 'solid',
    top: '98vh',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  ReviewTitle: {
    fontFamily: font.fontFamily,
    fontSize: '4em'
  },
  firstCard: {
   fontFamily: font.fontFamily
  },
  secondCard: {
   fontFamily: font.fontFamily
  },
  thirdCard: {
   fontFamily: font.fontFamily
 }
})

export default Reviews;
