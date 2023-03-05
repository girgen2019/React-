import React from 'react';

class Input extends React.Component {

  
  render() {
    return (
      <label>
        {this.props.labelValue}
        <br />
        <input
          className="input"
          name={this.props.name}
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChange={this.props.handleInputChange}
        />
      </label>
    );
  }
}

export default Input;
