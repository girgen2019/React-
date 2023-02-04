import React from "react";
import "../Component/FormStyle.css";
import Input from "./Input.js";
import Placeholder from "./Placeholder.js";

class Form extends React.Component {
  state = {
    name: "",
    surname: "",
    birthday: "",
    phone: "",
    email: "",
    aboutMe: "",
    steck: "",
    describeLastProject: "",
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <form>
        <h1>Create form</h1>
        <Input
          labelValue = "First name"
          placeholder = "First name"
          value={this.state.value}
          handleImputChange={this.handleImputChange}
        />
        <br />
        <Input
          labelValue = "Second name"
          placeholder = "Second name"
          value={this.state.value}
          handleInputChange={this.handleInputChange}
        />
        <br />
        <Input
          labelValue = "Birthday"
          placeholder = "Birthday"
          value={this.state.value}
          handleInputChange={this.handleInputChange}
        />
        <br />
        <Input
          labelValue = "Phone"
          placeholder = "+ 375(  )  _ _  -  _ _  -  _ _"
          value={this.state.value}
          handleInputChange={this.handleInputChange}
        />
        <br />
        <Input
          labelValue = "Email"
          placeholder = "ex: myname@gmail.com"
          value={this.state.value}
          handleInputChange={this.handleInputChange}
        />
        <br />
        <Placeholder
          labelPlaceHolder = "About Me"
          placeholder = "About Me"
          rows = {7}
          value={this.state.value}
          handleInputChange={this.handleInputChange}
        />
        <br />
        <Placeholder
          labelPlaceHolder = "Steck technologies"
          placeholder = "Steck technologies"
          rows = {7}
          value={this.state.value}
          handleInputChange={this.handleInputChange}
        />
        <br />
        <Placeholder
          labelPlaceHolder = "Describe last project"
          placeholder = "Describe last project"
          rows = {7}
          value={this.state.value}
          handleInputChange={this.handleInputChange}
        />
      </form>
    );
  }
}

export default Form;
