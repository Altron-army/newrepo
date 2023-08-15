import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    console.warn("constructor");
    this.state = {
      firstname: "siddiq",
      lastname: "shaikh",
      mobile: 9839291148,
      count: 0,

    }
  }
  componentDidMount() {
    console.warn("component did mount");
  }
  componentDidUpdate(preProps, preState, snapshot) {
    console.warn("console did update", preState);
  }
  render() {
    console.warn("render checking thoda sa modify kiya later");
    return (
      <div className='App'>
        <h1> Component update {this.state.firstname} aur {this.state.lastname} aur {this.state.mobile} aur {this.state.count}</h1>
        <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}> changing </button>
      </div>
    );
  }
}

export default App;
