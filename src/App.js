import React from "react";

import "./App.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

import NavBar from "./components/layout/NavBar";

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
        <h1>Teste</h1>
      </div>
    );
  }
}

export default App;
