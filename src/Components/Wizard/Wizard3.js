import React, { Component } from 'react';
import { updateFullSentence } from '../../redux/reducer';
import { connect } from 'react-redux';

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
    this.props.updateFullSentence(this.state.userText);
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

export default connect(null, { updateFullSentence })(Wizard3);