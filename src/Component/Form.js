/** @format */

import React from 'react';
import '../Component/Style/FormStyle.css';
import Input from './Input.js';
import Placeholder from './Placeholder.js';
import Button from './Button';

class Form extends React.Component {
  state = {
    name: '',
    surname: '',
    birthday: '',
    phone: '',
    email: '',
    aboutMe: '',
    stack: '',
    describe: '',
    countAbout: 600,
    countStack: 600,
    countDescribe: 600,
    message: 'You exceeded limit letters',
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.name, event.target.value);
    if (event.target.name === 'aboutMe') {
      this.setState({ countAbout: 600 - event.target.value.length });
    }
    if (event.target.name === 'stack') {
      this.setState({ countStack: 600 - event.target.value.length });
    }
    if (event.target.name === 'describe') {
      this.setState({ countDescribe: 600 - event.target.value.length });
    }
  };

  validateDate = (date) => {
    const regex = new RegExp(/^\d{2}\-\d{2}\-\d{4}$/i);
    const dateOk = regex.test(date);
    if (!dateOk) {
      return alert('Birthday is not validate');
    } else {
      this.setState({ birthday: date });
    }

    // console.log("testReg",regex.test('01.02.2021'))
  };

  validatePhone = (inputPhone) => {
    const regexNumber =
      /^\(?([0-9]{1})\)?[-]?([0-9]{4})[-]?([0-9]{2})[-]?([0-9]{2})$/;
    const numberOk = regexNumber.test(inputPhone);
    if (!numberOk) {
      return alert('Phone is not validate');
    } else {
      this.setState({ phone: inputPhone });
    }
  };

  validateEmail = (inputEmail) => {
    if (!inputEmail.includes('https://')) {
      return alert('Email is not validate');
    } else {
      this.setState({ email: inputEmail });
    }
  };

  zeroingForm = () => {
    this.setState({
      name: '',
      surname: '',
      birthday: '',
      phone: '',
      email: '',
      aboutMe: '',
      stack: '',
      describe: '',
      countAbout: 600,
      countStack: 600,
      countDescribe: 600,
    });
  };

  validateForm = (event) => {
    event.preventDefault();
    const nameButton = event.target.name;
    const about = event.target.name;

    if (nameButton === 'Save') {
      console.log('click');
      if (this.state.name === '') {
        alert('Name should be fill');
        return;
      } else if (this.state.name.search(/^[A-ZА-ЯЁ]/g) === -1) {
        alert('Name should start with a capital letter');
        return;
      } else {
        this.setState({ name: event.target.value });
      }

      if (this.state.surname === '') {
        return alert('Surname should be fill');
      } else if (this.state.surname.search(/^[A-ZА-ЯЁ]/g) === -1) {
        alert('Surname should start with a capital letter');
        return;
      } else if (this.state.surname) {
        this.setState({ surname: event.target.value });
      }

      if (this.state.birthday === '') {
        return alert('Birthday should be fill');
      } else if (this.state.birthday) {
        let data = this.state.birthday;
        this.validateDate(data);
      }

      if (this.state.phone === '') {
        alert('Phone should be fill');
        return;
      } else if (this.state.phone) {
        let number = this.state.phone;
        this.validatePhone(number);
      }

      if (this.state.email === '') {
        alert('Email should be fill');
        return;
      } else if (this.state.email) {
        const url = this.state.email;
        this.validateEmail(url);
      }

      if (this.state.aboutMe === '') {
        alert('Field about me should be fill');
        return;
      }

      if (Object.values(this.state).every((item) => item)) {
        console.log('Complete');
        console.log(this.state);

        alert(`
          Name --- ${this.state.name},
          Surname --- ${this.state.surname},
          Birthday --- ${this.state.birthday},
          Phone --- ${this.state.phone},
          Email --- ${this.state.email},
          About me --- ${this.state.aboutMe},
          Stack technologies --- ${this.state.stack},
          Describe last project --- ${this.state.describe}`);

        return this.zeroingForm();
      }
    } else if (nameButton === 'Cancel') {
      this.zeroingForm();
    }
  };

  render() {
    let { count, countAbout, countStack, countDescribe, message } = this.state;
    return (
      <form className="form">
        <h1>Create form</h1>
        <div className="wrapper">
          <Input
            name="name"
            labelValue="First name"
            placeholder="First name ----- John"
            value={this.state.name}
            handleInputChange={this.handleInputChange}
          />
          <Input
            name="surname"
            labelValue="Second name"
            placeholder="Second name ---- Jonson"
            value={this.state.surname}
            handleInputChange={this.handleInputChange}
          />
        </div>
        <div className="wrapper">
          <Input
            name="birthday"
            labelValue="Birthday"
            placeholder="DD / MM / YYYY"
            value={this.state.birthday}
            handleInputChange={this.handleInputChange}
          />
          <Input
            name="phone"
            labelValue="Phone"
            placeholder="7-7777-77-77"
            value={this.state.phone}
            handleInputChange={this.handleInputChange}
          />
        </div>

        <div className="wrapper-email">
          <Input
            name="email"
            labelValue="Email"
            placeholder="ex:  https://"
            value={this.state.email}
            handleInputChange={this.handleInputChange}
          />
        </div>

        <div className="wrapper-about">
          <Placeholder
            name="aboutMe"
            labelPlaceHolder="About Me"
            placeholder="About Me"
            rows={7}
            value={this.state.aboutMe}
            handleInputChange={this.handleInputChange}
          />
          {this.state.aboutMe.length <= 0 ? (
            <span style={{ display: 'none' }}>{countAbout}</span>
          ) : (
            <span style={{ color: 'red' }}>{countAbout}</span>
          )}
          {this.state.aboutMe.length > 600 ? (
            <span style={{ color: 'red', paddingLeft: '20px' }}>{message}</span>
          ) : (
            <span style={{ display: 'none' }}>{message}</span>
          )}
        </div>

        <div className="wrapper-about">
          <Placeholder
            name="stack"
            labelPlaceHolder="Steck technologies"
            placeholder="Steck technologies"
            rows={7}
            value={this.state.stack}
            handleInputChange={this.handleInputChange}
          />
          {this.state.stack.length <= 0 ? (
            <span style={{ display: 'none' }}>{countStack}</span>
          ) : (
            <span
              className="pop"
              style={{ color: 'red', alignItems: 'center' }}
            >
              {countStack}
            </span>
          )}
          {this.state.stack.length > 600 ? (
            <span style={{ color: 'red', paddingLeft: '20px' }}>{message}</span>
          ) : (
            <span style={{ display: 'none' }}>{message}</span>
          )}
          <br />
          <Placeholder
            name="describe"
            labelPlaceHolder="Describe last project"
            placeholder="Describe last project"
            rows={7}
            value={this.state.describe}
            handleInputChange={this.handleInputChange}
          />
          {this.state.describe.length <= 0 ? (
            <span style={{ display: 'none' }}>{countDescribe}</span>
          ) : (
            <span
              className="pop"
              style={{ color: 'red', alignItems: 'center' }}
            >
              {countDescribe}
            </span>
          )}
          {this.state.describe.length > 600 ? (
            <span style={{ color: 'red', paddingLeft: '20px' }}>{message}</span>
          ) : (
            <span style={{ display: 'none' }}>{message}</span>
          )}
        </div>

        <div className="button-block">
          <Button name="Save" validateForm={this.validateForm} />
          <Button name="Cancel" validateForm={this.validateForm} />
        </div>
      </form>
    );
  }
}

export default Form;
