import React from "react";

class B5Email extends React.Component {
  render() {
    return (
      <label>
        Email Address
        <br />
        <input
          className="input"
          name="website"
          placeholder="ex: myname@gmail.com"
          value={this.props.website}
          onChange={this.props.handleImputChange}
        />
      </label>
    );
  }
}

export default B5Email;
