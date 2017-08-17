import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {GridList, GridTile} from 'material-ui/GridList';
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

const Menu = (props) => (
  <div style={styles.root}>
    <GridList style={styles.gridList} cols={2.2}>
      {props.menuItems.map((item) => (
        <GridTile
          onClick={ () => props.onClick(item) }
          key={item.title}
          title={item.title}
          titleStyle={item.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
          <img src={`http://lorempixel.com/400/200/${item.photoCategory}`} alt="{item.title}"/>
        </GridTile>
      ))}
    </GridList>
  </div>
);

class App extends Component {

  constructor() {
    super();
    this.state = {
      categories: [
        {
          title: 'Events',
          photoCategory:'city',
          items: ['Jockamo\'s', 'The Mug']
        },
        {
          title: 'Playgrounds',
          photoCategory: 'nature',
          items: ['Ellenberger', 'Garfield']
        },
        {
          title: 'Restaurants',
          photoCategory: 'food',
          items: ['Jazz at the Zoo', 'Halloween in Irvington']
        }
      ],
      activeCategory: {items: []}
    };
  }

  render() {
    let activeCategory = this.state.activeCategory
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar
            title="Indianapolis City Kids"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
          <Menu menuItems={this.state.categories} onClick={(tag) => this.handleClick(tag)}></Menu>
          <ul>
            {activeCategory.items.map(item => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </MuiThemeProvider>
    );
  }

  handleClick(category) {
    this.setState({
      activeCategory: category
    })
  }
}

export default App;
