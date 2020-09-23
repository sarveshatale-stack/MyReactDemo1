import React from "react";
import "./styles.css";
import { Greet } from "./components/Greet";
import Welcome from "./components/Welcome";
import ClassWithJax from "./components/ClassWithJax";
import Props from "./components/Props";
import ClassProp from "./components/ClassProp";
export default function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h2>Welcome To React Demo</h2>
      <div>Welcome To React</div>
      <Greet />
      <Welcome />
      <ClassWithJax />
      <Props name="C#" heroname="world">
        <h1> Welcome to learn C#</h1>
      </Props>
      <Props name="Java" heroname="world2" />
      <button>Submit</button>
      <Props name="PHP" />
      <ClassProp classtype="C# Class" />
      <ClassProp classtype="Java Class" />
    </div>
  );
}
