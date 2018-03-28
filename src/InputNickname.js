import React, { Component } from 'react';

class InputNickname extends Component {
  constructor(props) {
    super(props);
    this.state = {nickname: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({nickname: e.target.value.trim()});
  }

  handleSubmit(e) {
    if (this.state.nickname === '') {
      alert('Empty!');
    }
    else {
      // TODO: PUBG API 작업
      alert('Submitted: ' + this.state.nickname);
    }
    e.preventDefault();
  }

  render() {
    return (
      <div className="InputNickname">
        <form onSubmit={this.handleSubmit} className="InputNickname-form">
          <label>
            <input type="text" value={this.state.value} onChange={this.handleChange}  className="InputNickname-input"/>
          </label>
          <input type="submit" value="Submit"  className="InputNickname-submit"/>
        </form>
      </div>
    );
  }
}

export default InputNickname;
