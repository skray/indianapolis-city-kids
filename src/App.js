import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Menu(props) {
  return (
    <ul>
      <li className="Menu-item" onClick={ () => props.onClick({title:'restaurants'}) }>Kid Friendly Restaraunts</li>
      <li className="Menu-item" onClick={ () => props.onClick({title:'parks'}) }>Parks</li>
      <li className="Menu-item" onClick={ () => props.onClick({title: 'events'}) }>Events</li>
    </ul>
  );
}

function Card(props) {
  return (
    <div>
      <header>
        <h1>{props.title}</h1>
      </header>
      <div>
        {props.body}
      </div>
    </div>
  );
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      list: []
    };
  }

  render() {
    let list = this.state.list
    console.log(list)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h4>Things to do around Indy with your kids</h4>
        </div>
        <Menu onClick={(tag) => this.handleClick(tag)}></Menu>
        <ul>
          {list.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>
    );
  }

  handleClick(tag) {
    let list = []
    console.log(tag)
    switch(tag) {
      case 'restaurants':
        list = ['Jockamo\'s', 'The Mug']
        break;
        case 'parks':
        list = ['Ellenberger', 'Garfield']
        break;
        case 'events':
        list = ['Jazz at the Zoo', 'Halloween in Irvington']
        break;
        default:
        break;
    }
    console.log('list is')
    console.log(list)
    this.setState({
      list: list
    })
  }
}

export default App;
