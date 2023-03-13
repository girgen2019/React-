import React from "react";

class Textarea extends React.Component {
  render() {
    return (
        <label>
        {this.props.labelPlaceHolder}
        <br />
        <textarea
          className="textarea"
          name = {this.props.name}
          placeholder={this.props.placeholder}
          rows={this.props.rows}
          value={this.props.value}
          onChange={this.props.handleInputChange}
          
        />
      </label>
    );
  }
}

export default Textarea;