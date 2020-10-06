import React, { Component } from 'react';

class Wizard1 extends Component {
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
    this.props.history.push('/wizard2')
  }

  render() {
    return (
      <section>
        <h1>Enter your first word.</h1>
        <input onChange={this.handleInput} />
        <button onClick={this.handleSubmit}>submit</button>
      </section>
    )
  }
}

export default Wizard1;