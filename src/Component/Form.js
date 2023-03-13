/** @format */

import React from 'react';
import '../Component/Style/FormStyle.css';
import Input from './Input.js';
import Textarea from './Placeholder.js';
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
    errorName: '',
    errorSurname: '',
    errorBirthday: '',
    errorPhone: '',
    errorEmail: '',
    errorEmpty: '',
    errorAbout: '',
    errorStack: '',
    errorDescribe: '',
    errorAble: false,
    form: '',
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    if (event.target.name === 'phone') {
      this.phoneInputMask(event.target.value);
    }
  };

  phoneInputMask = (value) => {
    let x = value
      .replace(/\D/g, '')
      .match(/(\d{0,0})(\d{0,1})(\d{0,3})(\d{0,2})(\d{0,2})/);
    let res = x[1] + x[2] + '-' + x[3] + '-' + x[4] + '-' + x[5];
    return this.setState({ phone: res });
  };

  validateEmail = (inputEmail) => {
    if (inputEmail.search(/^https:\/\/.*/g) === -1) {
      this.setState({ errorEmail: 'Email should starting with https://' });
    } else {
      this.setState({ email: inputEmail });
    }
  };

  resetForm = () => {
    this.setState({
      name: '',
      surname: '',
      birthday: '',
      phone: '',
      email: '',
      aboutMe: '',
      stack: '',
      describe: '',
      errorName: '',
      errorSurname: '',
      errorBirthday: '',
      errorPhone: '',
      errorEmail: '',
      errorEmpty: '',
      errorAbout: '',
      errorStack: '',
      errorDescribe: '',
      errorAble: false,
      form: '',
    });
  };

  validateForm = (event) => {
    event.preventDefault();

    if (event.target.name === 'Save') {
      if (this.state.name === '') {
        this.setState({
          name: '',
          errorName: 'Field is not valid',
        });
      } else if (this.state.name.search(/^[A-ZА-ЯЁ]/g) === -1) {
        this.setState({
          name: '',
          errorName: 'Name should start with a capital letter',
        });
      } else {
        this.setState({ name: event.target.value });
      }

      if (this.state.surname === '') {
        this.setState({ errorSurname: 'Field is not valid' });
      } else if (this.state.surname.search(/^[A-ZА-ЯЁ]/g) === -1) {
        this.setState({
          surname: '',
          errorSurname: 'Name should start with a capital letter',
          errorAble: true,
        });
      } else if (this.state.surname) {
        this.setState({ surname: event.target.value });
      }

      if (this.state.birthday === '') {
        this.setState({
          errorBirthday: 'Field is not valid',
          errorAble: true,
        });
      } else if (this.state.birthday) {
        this.setState({ birthday: event.target.value });
      }

      if (this.state.phone === '') {
        this.setState({
          errorPhone: 'Field is not valid',
          errorAble: true,
        });
      }

      if (this.state.email === '') {
        this.setState({
          errorEmail: 'Field is not valid'
        });
      } else if (this.state.email) {
        const url = this.state.email;
        this.validateEmail(url);
      }

      if (this.state.aboutMe === '') {
        this.setState({
          errorAbout: 'Field is not valid',
          errorAble: true,
        });
      } else {
        this.setState({ aboutMe: event.target.value });
      }

      if (this.state.stack === '') {
        this.setState({
          errorStack: 'Field is not valid',
          errorAble: true,
        });
      } else {
        this.setState({ stack: event.target.value });
      }

      if (this.state.describe === '') {
        this.setState({ errorDescribe: 'Field is not valid' });
      } else {
        this.setState({ describe: event.target.value });
      }

      if (
        Object.values(this.state).filter(
          (item) =>
            item.errorName === true &&
            item.errorSurname === true &&
            item.errorBirthday === true &&
            item.errorPhone === true &&
            !item.errorEmail == true
        )
      ) {
        this.setState({
          form: (
            <div className="b-popup">
              <div className="b-popup-content">
                <h3>{this.state.name}</h3>
                <h3>{this.state.surname}</h3>
                <h3>{this.state.birthday}</h3>
                <h3>{this.state.phone}</h3>
                <h3>{this.state.email}</h3>
                <div>{this.state.aboutMe}</div>
                <div>{this.state.stack}</div>
                <div>{this.state.describe}</div>
              </div>
            </div>
          ),
        });
      }
    } else if (event.target.name === 'Cancel') {
      this.resetForm();
    }
  };

  render() {
    let {
      aboutMe,
      stack,
      describe,
      errorName,
      errorSurname,
      errorBirthday,
      errorPhone,
      errorEmail,
      errorAble,
      form,
    } = this.state;

    return (
      <>
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
            {!this.state.name && (
              <div style={{ color: 'red', marginTop: '-5px' }}>{errorName}</div>
            )}
            <Input
              type="date"
              name="birthday"
              labelValue="Birthday"
              placeholder="DD / MM / YYYY"
              value={this.state.birthday}
              handleInputChange={this.handleInputChange}
            />
            {!this.state.birthday  && (
              <div style={{ color: 'red', marginTop: '-5px' }}>
                {errorBirthday}
              </div>
            )}
          </div>
          <div className="wrapper">
            <Input
              name="surname"
              labelValue="Second name"
              placeholder="Second name ---- Jonson"
              value={this.state.surname}
              handleInputChange={this.handleInputChange}
            />
            {!this.state.surname && (
              <div style={{ color: 'red', marginTop: '-5px' }}>
                {errorSurname}
              </div>
            )}

            <Input
              name="phone"
              labelValue="Phone"
              placeholder="7-7777-77-77"
              value={this.state.phone}
              handleInputChange={this.handleInputChange}
            />
            {!this.state.phone  && (
              <div style={{ color: 'red', marginTop: '-5px' }}>
                {errorPhone}
              </div>
            )}
          </div>
          <div className="wrapper-1">
            <Input
              name="email"
              labelValue="Email"
              placeholder="ex:  https://"
              value={this.state.email}
              handleInputChange={this.handleInputChange}
            />
            {(!this.state.email || this.state.errorEmail)  && 
              <div style={{ color: 'red', marginTop: '-5px' }}>
                {errorEmail}
              </div>
            }
          </div>

          <div className="wrapper-1">
            <Textarea
              name="aboutMe"
              labelPlaceHolder="About Me"
              placeholder="About Me"
              rows={7}
              value={this.state.aboutMe}
              handleInputChange={this.handleInputChange}
            />
            {aboutMe.length === 0 ? (
              <div style={{ display: 'none' }}></div>
            ) : (
              <div style={{ color: 'red', marginTop: '-20px' }}>
                {600 - aboutMe.length}
              </div>
            )}{aboutMe.length > 600 && <div style={{color:'red',marginTop: '-10px'}}>Limit over</div>}
          </div>

          <div className="wrapper-1">
            <Textarea
              name="stack"
              labelPlaceHolder="Steck technologies"
              placeholder="Steck technologies"
              rows={7}
              value={this.state.stack}
              handleInputChange={this.handleInputChange}
            />
            {stack.length === 0 ? (
              <div style={{ display: 'none' }}></div>
            ) : (
              <div style={{ color: 'red', marginTop: '-20px' }}>
                {600 - stack.length}
              </div>
            )}{stack.length > 600 && <div style={{color:'red',marginTop: '-10px'}}>Limit over</div>}

            <br />
            <Textarea
              name="describe"
              labelPlaceHolder="Describe last project"
              placeholder="Describe last project"
              rows={7}
              value={this.state.describe}
              handleInputChange={this.handleInputChange}
            />
            {describe.length === 0 ? (
              <div style={{ display: 'none' }}></div>
            ) : (
              <div style={{ color: 'red', marginTop: '-20px' }}>
                {600 - describe.length}
              </div>
            )}{describe.length > 600 && <div style={{color:'red',marginTop: '-10px'}}>Limit over</div>}
          </div>

          <div className="button-block">
            <Button name="Save" validateForm={this.validateForm} />
            <Button name="Cancel" validateForm={this.validateForm} />
          </div>
        </form>
        {this.state.errorName ||
        this.state.errorSurname ||
        this.state.errorPhone ||
        this.state.errorBirthday ||
        this.state.errorEmail ||
        this.state.errorAbout ||
        this.state.errorStack ||
        this.state.errorDescribe ? (
          <div style={{ display: 'none' }}>{form}</div>
        ) : (
          <div onClick={() => this.resetForm()}>{form}</div>
        )}
      </>
    );
  }
}

export default Form;
