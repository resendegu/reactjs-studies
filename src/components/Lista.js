import React from "react";

class Lista extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {id: 1, name: 'item1', complete: false},
        {id: 1, name: 'item2', complete: false},
        {id: 1, name: 'item3', complete: true},
        {id: 1, name: 'item4', complete: false}
      ]
    };
  }

  render() {
    
    
    return (
      <>
        <ul>
          {this.state.items.map(item => 
            <Item key={item.id} complete={item.complete}>{item.name}</Item>
          )}
        </ul>
      </>
    );      
  }
    
}

export default Lista;

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    const textDecoration = this.props.complete ? 'line-through' : 'none';
    return (
      <>
        <li style={{textDecoration}} data-id={this.props.id}>
          {this.props.children}
        </li>
      </>
    );      
  }
    
}


