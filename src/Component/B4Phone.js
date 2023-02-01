import React from "react";

class Block4 extends React.Component {
  render() {
    return (
      <label>
        Phone
        <br />
        <input
          className="input"
          name="phone"
          placeholder="+ 375(  )  _ _  -  _ _  -  _ _"
          value={this.props.phone}
          onChange={this.props.handleImputChange}
        />
      </label>
    );
  }
}

export default Block4;
