import React from "react";

class Input extends React.Component {
  render() {
    return (
      <label>
        {this.props.labelValue}
        <br />
        <input
          className="input"
          name={this.props.name}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.handleImputChange}
        />
      </label>
    );
  }
}

export default Input;
