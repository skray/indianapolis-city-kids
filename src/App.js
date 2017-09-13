import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import Categories from './Categories';
import categoryList from './categoryList';
import {css} from 'glamor';
import './App.css';
import flag from './flag.png';

const styles = {
  appBar: {
    'box-shadow': '0 0 0',
    position: 'fixed'
  },
  mainHeader: {
    'background-color': 'rgb(0, 188, 212)',
    color: 'white',
    'box-shadow': '0px 1px 6px rgba(0, 0, 0, 0.12), 0px 1px 4px rgba(0, 0, 0, 0.12)',
    padding: '64px 20px 20px 20px',
    display: 'flex',
    fontSize: '2rem',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between'
  },
  mainHeaderText: {
    height: '100%',
    margin: 'auto 0'
  },
  mainHeaderTextMedia: css({
    '@media(max-width: 600px)': {
      maxWidth: '188px',
      'font-size': '1.4rem'
    }}
  ),
  flag: {
    display: 'block',
    maxWidth: '400px',
    width: 'auto',
    height: 'auto',
    maxHeight: '250px',
    padding: '20px'
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
          <div style={styles.mainHeader}>
            <img style={styles.flag} src={flag} alt="Indianapolis Flag"/>
            <span {...styles.mainHeaderTextMedia}style={styles.mainHeaderText}>Have kids in the city? Find things to do where you are.</span>
          </div>
          <h1 style={styles.lookingForHeader}>I'm looking for...</h1>
          <Categories menuItems={this.state.categories} onClick={(tag) => this.handleClick(tag)} />
          <ItemList items={selectedCategory.items} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
