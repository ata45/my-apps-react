import React, {Component} from 'react';


class state extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      header:"ini header"
    }
  }
  render(){
    rerturn(
      <div>
        <h1>{this.state.header}</h1>
      </div>
    );
  }
}
