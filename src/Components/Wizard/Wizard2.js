import React, { Component } from 'react';

class Wizard2 extends Component {
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
    this.props.history.push('/wizard3')
  }

  render() {
    return (
      <section>
        <h1>Enter your second word.</h1>
        <input onChange={this.handleInput} />
        <button onClick={this.handleSubmit}>submit</button>
      </section>
    )
  }
}

export default Wizard2;