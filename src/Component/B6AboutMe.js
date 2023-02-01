import React from "react";

class B6AboutMe extends React.Component {
  render() {
    return (
      <label>
        About me
        <br />
        <textarea
          className="input"
          name="aboutMe"
          placeholder="about me"
          rows={7}
          value={this.props.aboutMe}
          onChange={this.props.handleImputChange}
        />
      </label>
    );
  }
}

export default B6AboutMe;
