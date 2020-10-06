import React, { Component } from 'react';

class Wizard3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userText: ''
    }
  }
  handleInput = e => {
    this.setState({ userText: e.target.value })
  }

  handleSubmit = () => {
    window.alert('wubalubadubdub')
  }

  render() {
    return (
      <section>
        <h1>Enter your third word.</h1>
        <input onChange={this.handleInput} />
        <button onClick={this.handleSubmit}>Submit Final</button>
      </section>
    )
  }
}

export default Wizard3;