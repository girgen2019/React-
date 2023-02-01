import React from "react";


class B1Name extends React.Component {
  render() {
    return (
      <label>
        First name
        <br />
        <input
          className="input"
          name="name"
          placeholder="First name"
          value={this.props.name}
          onChange={this.props.handleImputChange}
        />
      </label>
    );
  }
}

export default B1Name;
