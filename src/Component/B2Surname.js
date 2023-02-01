import React from "react";

class B2Surname extends React.Component {
  render() {
    return (
      <label>
        Last Name
        <br />
        <input
          className="input"
          name="surname"
          placeholder="Last Name"
          value={this.props.surname}
          onChange={this.props.handleImputChange}
        />
      </label>
    );
  }
}

export default B2Surname;
