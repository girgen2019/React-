import React from "react";

class B3Birthday extends React.Component {
  render() {
    return (
      <label>
        Birthday
        <br />
        <input
          className="input"
          name="birthday"
          placeholder="Birthday"
          value={this.props.birthday}
          onChange={this.props.handleImputChange}
        />
      </label>
    );
  }
}

export default B3Birthday;
