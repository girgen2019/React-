import React from "react";

class B7Stack extends React.Component {
  render() {
    return (
      <label>
        Steck technologies
        <br />
        <textarea
          className="input"
          name="steck"
          placeholder="steck technologies"
          rows={7}
          value={this.props.steck}
          onChange={this.props.handleImputChange}
        />
      </label>
    );
  }
}

export default B7Stack;
