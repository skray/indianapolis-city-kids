import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {GridList, GridTile} from 'material-ui/GridList';
import {List, ListItem} from 'material-ui/List';
import './App.css';

const ItemList = (props) => (
  <List>
    {props.items.map((item) => (
      <ListItem primaryText={item}/>
    ))}
  </List>
);

class Menu extends Component {

  constructor() {
    super();
    this.state = {};
    this.styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: '20px'
      },
      gridList: {
        display: 'flex',
        flexWrap: 'nowrap'
      },
      titleStyle: {
        color: 'rgb(0, 188, 212)',
      },
      selected: {
        height: '190px',
        'box-shadow': '3px 3px 3px 0px rgba(0,0,0,0.75)'
      },
      hovered: {
        filter: 'brightness(80%)',
        cursor: 'pointer'
      }
    };
  }

  onMouseOver(item) {
    this.setState({
      hoveredItem: item
    });
  }

  onMouseOut() {
    this.setState({
      hoveredItem: null
    });
  }

  render() {
    return (
      <div style={this.styles.root}>
        <GridList style={this.styles.gridList} cols={2.2}>
          {this.props.menuItems.map((item) => (
            <GridTile
              style={item.selected ? this.styles.selected : null}
              onClick={ () => this.props.onClick(item) }
              key={item.title}
              title={item.title}
              titleStyle={item.titleStyle}
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              onMouseOver={() => this.onMouseOver(item)}
              onMouseOut={() => this.onMouseOut()}
            >
              <img style={item === this.state.hoveredItem ? this.styles.hovered : null} src={`http://lorempixel.com/400/200/${item.photoCategory}`} alt="{item.title}"/>
            </GridTile>
          ))}
        </GridList>
      </div>
    )
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      categories: [
        {
          title: 'Events',
          photoCategory:'city',
          items: ['Jazz at the Zoo', 'Halloween in Irvington']
        },
        {
          title: 'Outdoor',
          photoCategory: 'nature',
          items: ['Ellenberger Park', 'Garfield Park']
        },
        {
          title: 'Food',
          photoCategory: 'food',
          items: ['Jockamo\'s', 'The Mug']
        }
      ],
      selectedCategory: {items: []}
    };
  }

  render() {
    let selectedCategory = this.state.selectedCategory
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar
            title="Indianapolis City Kids"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
          <Menu menuItems={this.state.categories} onClick={(tag) => this.handleClick(tag)}></Menu>
          <ItemList items={selectedCategory.items}></ItemList>
        </div>
      </MuiThemeProvider>
    );
  }

  handleClick(clickedCategory) {
    let categories = this.state.categories;
    categories.forEach(category => category.selected = false)
    let selectedCategory = categories.find(category => category.title === clickedCategory.title)

    if(selectedCategory) {
      selectedCategory.selected = true;
    }

    this.setState({
      categories: categories,
      selectedCategory: selectedCategory
    })
  }
}

export default App;
