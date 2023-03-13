import React from "react";
import "./App.css";
import Form from "./Component/Form";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Form />
        </header>  
      </div>
    );
  }
}

export default App;
