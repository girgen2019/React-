import React from "react";
import "./Button.css";

class Button extends React.Component {
  render() {
    return (
      <div className="button">
        <button className="button-item">Save</button>
        <button className="button-item">Cancel</button>
      </div>
    );
  }
}

export default Button;
