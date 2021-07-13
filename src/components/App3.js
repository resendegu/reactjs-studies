import React from "react";

class App3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', age: 26};
  }
  
  changeName = (e) => {
    this.setState({name: e.target.value})
  }

  render() {
    return (
      <>
      Nome: <input type="text" value={this.state.name} onChange={this.changeName} ></input>
        <p>
          Olá {this.state.name}
        </p>
      </>
    );
  }
}

export default App3;
