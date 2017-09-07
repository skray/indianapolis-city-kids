import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import StarIcon from 'material-ui/svg-icons/action/grade';
import {red300} from 'material-ui/styles/colors';
import Categories from './Categories';
import categoryList from './categoryList';
import './App.css';

const styles = {
  appBar: {
    'box-shadow': '0 0 0',
    position: 'fixed'
  },
  header: {
    'background-color': 'rgb(0, 188, 212)',
    color: 'white',
    'box-shadow': '0px 1px 6px rgba(0, 0, 0, 0.12), 0px 1px 4px rgba(0, 0, 0, 0.12)',
    padding: '64px 64px 20px 64px',
    'font-size': '2rem',
    display: 'flex'
  },
  mainHeaderTitle: {
    'font-size': '4rem',
    margin: 0,
    opacity: 0.95
  },
  lookingForHeader: {
    'padding': '25px 0 0 64px'
  }
};

const Flag = () => {
  let flagHeight = 250;
  let flagWidth = 400;
  let lineWidth = 40;
  let circleDiameter = 120;
  let starDiameter = 60;

  return <span style={{display: 'flex', 'flex-direction':'column', 'justify-content':'center'}}>
    <span style={{position: 'relative', width:`${flagWidth}px`, height: `${flagHeight}px`, display: 'flex'}}>
      <div style={{width: '100%', height: `${lineWidth}px`, 'background-color':'white', position: 'absolute', top: `${flagHeight/2 - lineWidth/2}px`}}></div>
      <div style={{width: `${lineWidth}px`, height: '100%', 'background-color':'white', position: 'absolute', left: `${flagWidth/2 - lineWidth/2}px`}}></div>
      <div style={{width: `${circleDiameter}px`, height: `${circleDiameter}px`, 'border-radius': '50%', 'background-color': 'white', position: 'absolute', left: `${flagWidth/2 - circleDiameter/2}px`, top: `${flagHeight/2 - circleDiameter/2}px`}}></div>
      <div style={{width: `${starDiameter}px`, height: `${starDiameter}px`, 'border-radius': '50%', 'background-color': red300, position: 'absolute', left: `${flagWidth/2 - starDiameter/2}px`, top: `${flagHeight/2 - starDiameter/2}px`}}></div>
      <StarIcon style={{width: `${starDiameter}px`, height: `${starDiameter}px`, 'border-radius': '50%', 'color': 'white', position: 'absolute', left: `${flagWidth/2 - starDiameter/2}px`, top: `${flagHeight/2 - starDiameter/2}px`}}/>
    </span>
  </span>
}

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
          <div style={styles.header}>
            <span style={{width: '50%', padding: '100px 100px 100px 0'}}>Have kids in the city? Find things to do where you are, instead of having to drive to the 'burbs.</span>
            <Flag />
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
