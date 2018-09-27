import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';

class Header extends React.Component{
  constructor(){
   super();
   this.state = { blah: '' }
  }

  render(){
    return(
      <div className="">
      <Image src="../style/images/HeroImage.jpeg" fluid />
      </div>
    )
  }
}

export default Header;
