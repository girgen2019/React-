import React from "react";
import "./Style/Button.css";

class Button extends React.Component {
  render() {
    return (
      <>
        <button className="button"
        name={this.props.name}
        onClick={this.props.validateForm}
        >{this.props.name}</button>
      </>
    );
  }
}

export default Button;
