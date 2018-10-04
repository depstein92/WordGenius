import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Form,
         TextArea,
         Header,
         Segment,
         Icon,
         Modal,
         Button } from 'semantic-ui-react';

class TextAnalyzer extends React.Component{

 constructor(){
    super();

    this.state = { modalOpen: false }
    this.onSubmit = this.onSubmit.bind(this);
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

 onSubmit(e){
   e.preventDefault();
 }

 onCloseModal(){
   this.setState({ modalOpen: false  });
 }

 onOpenModal(){
   this.setState({ modalOpen: true });
 }

 render(){
   return(
  <div className={css(styles.container)}>
    <Header attached='top' className={css(styles.title)}>
      Text Analyzer
    </Header>
    <div className={css(styles.modal)}>
     <Modal trigger={<Button>Instructions</Button>} closeIcon>
      <Header icon='question circle outline' content='Instructions' />
      <Modal.Content>
      <ul className={css(styles.instructionsTable)}>
       <li>lorem ipsum</li>
       <li>lorem ipsum</li>
       <li>lorem ipsum</li>
       <li>lorem ipsum</li>
      </ul>
    </Modal.Content>
   </Modal>
   </div>
   <Segment className={css(styles.outerSegment)} attached>
    <Form onSubmit={this.onSubmit}>
     <TextArea className={css(styles.textArea)} />
     <Form.Button>Submit</Form.Button>
     </Form>
   </Segment>
 </div>
   )
 }
}

/*/*
A) Identify data
B) Write Query in GraphiQL (double check) and in component file
C) Bond query and component
D) Access data!


const query = gql`
 {
   songs{
    title
   }
}

`;

export default graphql(query)(SongList); //C)
*/


const styles = StyleSheet.create({
  container: {
    height: '100vh',
    width: '100vw',
    top: '200vh',
    position: 'absolute',
    borderStyle: 'solid',
    borderTop: 'black'
  },
  textArea: {
    width: '60vw',
    height: '60vh'
  },
  outerSegment: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: "Playfair Display, serif",
    fontSize: '3em'
  },
  modal: {
    display: 'flex',
    justifyContent: 'center',
  },
  instructionsTable:{
    fontFamily: "Playfair Display, serif"
  }
})


export default TextAnalyzer;
