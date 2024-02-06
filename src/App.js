import './App.css';
import React, { createContext, useState } from "react";
import Weather from "./components/weather.js"

function App() {

  return (
    <div className="App">
      <Weather/> 
    </div>
  );
}
export default App;