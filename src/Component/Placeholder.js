import React from "react";

class Placeholder extends React.Component {
  render() {
    return (
        <label>
        {this.props.labelPlaceHolder}
        <br />
        <textarea
          className="input"
          name = {this.props.name}
          placeholder={this.props.placeholder}
          rows={this.props.rows}
          value={this.props.value}
          onChange={this.props.handleImputChange}
        />
      </label>
    );
  }
}

export default Placeholder;