import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "../src/_config/routes";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    
      <Routes />
    </BrowserRouter>
  );
}

export default App;
