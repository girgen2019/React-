import React from "react";
import "../Component/FormStyle.css";
import B1Name from "./B1Name.js";
import B2Surname from "./B2Surname";
import B3Birthday from "./B3Birthday.js";
import B4Phone from "./B4Phone.js";
import B5Email from "./B5Email.js";
import B6AboutMe from "./B6AboutMe.js";
import B7Stack from "./B7Stack.js";
import B8Discribe from "./B8Discribe.js";

class Form extends React.Component {
  state = {
    name: "",
    surname: "",
    birthday: "",
    phone: "",
    website: "",
    aboutMe: "",
    steck: "",
    describeLastProject: "",
  };

  handleImputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <form>
        <h1>Create form</h1>
        <B1Name
          name={this.state.name}
          handleImputChange={this.handleImputChange}
        />
        <br />
        <B2Surname
          name={this.state.surname}
          handleImputChange={this.handleImputChange}
        />
        <br />
        <B3Birthday
          name={this.state.birthday}
          handleImputChange={this.handleImputChange}
        />
        <br />
        <B4Phone
          name={this.state.phone}
          handleImputChange={this.handleImputChange}
        />
        <br />
        <B5Email
          name={this.state.website}
          handleImputChange={this.handleImputChange}
        />
        <br />
        <B6AboutMe
          name={this.state.aboutMe}
          handleImputChange={this.handleImputChange}
        />
        <br />
        <B7Stack
          name={this.state.aboutMe}
          handleImputChange={this.handleImputChange}
        />
        <br />
        <B8Discribe
          name={this.state.aboutMe}
          handleImputChange={this.handleImputChange}
        />
      </form>
    );
  }
}

export default Form;
