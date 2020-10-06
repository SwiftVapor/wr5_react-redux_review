import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Sentence Maker!</h1>
        <p>Your sentence: {this.props.theSentence}</p>
      </header>
    )
  }
}

const mapStateToProps = reduxState => {
    console.log(reduxState);

    return {
        theSentence: reduxState.fullSentence
    }
}

export default connect(mapStateToProps)(Header);