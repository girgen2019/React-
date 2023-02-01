import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Component/Form";
import Button from "./Component/Button";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Form />
          <Button />
        </header>
      </div>
    );
  }
}

export default App;
