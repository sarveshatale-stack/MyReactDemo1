import React from "react";
import "./styles.css";
import { Greet } from "./components/Greet";
import Welcome from "./components/Welcome";

export default function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h2>Welcome To React Demo</h2>
      <div>Welcome To React</div>
      <Greet />
      <Welcome />
    </div>
  );
}
