import React from "react";

class B8Discribe extends React.Component {
  render() {
    return (
      <label>
        Describe last project
        <br />
        <textarea
          className="input"
          name="describeLastProject"
          placeholder="Describe"
          rows={7}
          value={this.props.describeLastProject}
          onChange={this.props.handleImputChange}
        />
      </label>
    );
  }
}

export default B8Discribe;
