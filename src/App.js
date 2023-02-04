import React from "react";
import "./App.css";
import Form from "./Component/Form";
import Button from "./Component/Button";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Form />
          <div className="Button-block">
            <Button name="Save" />
            <Button name="Cancel" />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
