import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import Categories from './Categories';
import categoryList from './categoryList';
import './App.css';

const styles = {
  appBar: {
    'box-shadow': '0 0 0'
  },
  header: {
    'background-color': 'rgb(0, 188, 212)',
    color: 'white',
    'box-shadow': '0px 1px 6px rgba(0, 0, 0, 0.12), 0px 1px 4px rgba(0, 0, 0, 0.12)',
    padding: '64px 64px 20px 64px'
  },
  mainHeaderTitle: {
    'font-size': '4rem',
    margin: 0,
    opacity: 0.95
  },
  mainHeaderBody: {
    'font-size': '2rem'
  },
  lookingForHeader: {
    'padding': '25px 0 0 64px'
  }
};

const ItemList = (props) => (
  <List>
    {props.items.map((item) => (
      <ListItem primaryText={item.name}/>
    ))}
  </List>
);

class App extends Component {

  constructor() {
    super();
    this.state = {
      categories: categoryList,
      selectedCategory: {items: []}
    };
  }

  render() {
    let selectedCategory = this.state.selectedCategory;
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar
            style={styles.appBar}
            title="Indianapolis City Kids"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
          <div style={styles.header}>
            <h1 style={styles.mainHeaderTitle}>Have kids in the city?</h1>
            <p style={styles.mainHeaderBody}>Tired of being told to drive to Fishers? We've got you covered.</p>
          </div>
          <h1 style={styles.lookingForHeader}>I'm looking for...</h1>
          <Categories menuItems={this.state.categories} onClick={(tag) => this.handleClick(tag)} />
          <ItemList items={selectedCategory.items} />
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
