import React, {Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';

const styles = {
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

export default class Categories extends Component {

  constructor() {
    super();
    this.state = {};
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
      <div style={styles.root}>
        <GridList style={styles.gridList} cols={2.2}>
          {this.props.menuItems.map((item) => (
            <GridTile
              style={item.selected ? styles.selected : null}
              onClick={ () => this.props.onClick(item) }
              key={item.title}
              title={item.title}
              titleStyle={item.titleStyle}
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              onMouseOver={() => this.onMouseOver(item)}
              onMouseOut={() => this.onMouseOut()}
            >
              <img style={item === this.state.hoveredItem ? styles.hovered : null} src={`http://lorempixel.com/400/200/${item.photoCategory}`} alt="{item.title}"/>
            </GridTile>
          ))}
        </GridList>
      </div>
    )
  }
}
