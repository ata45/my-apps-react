import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var j = 2;
    var style ={
      fontSize : 10,
      color: 'blue'
    }
    return (
      /*<div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
      Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
      >
      Learn React
      </a>
      </header>
      </div>*/
      <div>
        <h1 className="App-header">ini header</h1>
        <p myattribute = "somevalue">This is the content</p>
        <p>{j==1? 'False' : 'true'}</p>
        <h1 style={style}></h1>
    
        <Header/>
        <Content/>
      </div>
    );
  }
}

class Header extends Component{
  render(){


  return(
    <h1>Ini header</h1>
  );
  }
}

class Content extends Component{
  render(){
    var j = 1;
    var style ={
      color: "yellow"
    }
  return(
  <div>
    <p myattribute = "somevalue">This is the content</p>
    <p>{j==1? 'False' : 'true'}</p>
    <h1 style={style}></h1>
  </div>
  );
}
}

export default App;
