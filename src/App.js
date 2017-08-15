import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
import logo from './logo.svg';
import './App.css';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

const categories = [
  {title: 'Events'},
  {title: 'Playgrounds'},
  {title: 'Restaurants'}
];

const Menu = (props) => (
  <div style={styles.root} onClick={ () => props.onClick({title:'restaurants'}) }>
    <GridList style={styles.gridList} cols={2.2}>
      {categories.map((tile) => (
        <GridTile
          key={tile.title}
          title={tile.title}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
          <img src={tile.img} alt="{tile.title}"/>
        </GridTile>
      ))}
    </GridList>
  </div>
);

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
      <MuiThemeProvider>
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
      </MuiThemeProvider>
    );
  }

  handleClick(tag) {
    let list = []
    console.log(tag)
    switch(tag.title) {
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
