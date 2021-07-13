import React from "react";

class App4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: undefined, txtName: ''};
  }
  
  changeTxtName = (e) => {
    this.setState({txtName: e.target.value})
  }

  persistName = () => {
    this.setState({name: this.state.txtName})
  }

  render() {
    
    const renderForm = () => {
      return (
        <>
          Nome: <input type="text" value={this.state.name} onChange={this.changeTxtName} ></input>
          <button onClick={this.persistName}>Salvar</button>
        </>
      );
    }
      
    const renderText = () => {
      return (
        <>
          <p>
            Olá {this.state.name}
          </p>
        </>
      );
    }
    return !this.state.name ? renderForm() : renderText();      
  }
    
}


export default App4;
