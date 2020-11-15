import React from "react";
import "./App.css";
import * as oc from "./oc.json";

function App() {
  return <div className="App">Hello, world! {oc.red[0]}</div>;
}

export default App;
