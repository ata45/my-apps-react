import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      data:
      [
        {
          "id": 1,
          "name": "Janu",
          "age": 40,
        },
        {
          "id": 2,
          "name": "Janu",
          "age": 40,
        },
        {
          "id": 3,
          "name": "Janu",
          "age": 40,
        },
        {
          "id": 4,
          "name": "Janu",
          "age": 40,
        }
      ]
    }
  }
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
        <Line/>
        <Header/>
        <Content/>
        <Line/>
        <table>
          <tbody>
            <TableHeader/>
            {this.state.data.map((orang, i)=><TableRow key={i} data={orang} />)}
          </tbody>
        </table>
        <Line/>
        <UsingProps/>
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

class Line extends Component{
  render(){
    return(
    <div>
        <p>-----------------------------------------------------------------------</p>
    </div>
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
    <h1 style={style}>Nani</h1>
  </div>
  );
}
}

class TableHeader extends Component{
  render(){
    return(
    <tr>
      <th>ID</th>
      <th>Nama</th>
      <th>Umur</th>
    </tr>
    );
  }
}

class TableRow extends Component{
  render(){
    return(
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
      </tr>
    );
  }
}

class UsingProps extends Component{
  render(){
    return(
    <div>
        <p>{this.props.header}</p>
    </div>
    );
  }
}
UsingProps.defaultProps={
  header: "Ini header",
}


export default App;
