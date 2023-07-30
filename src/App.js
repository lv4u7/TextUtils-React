import "./App.css";
import Nav from "./components/Nav.js";
import TextForm from "./components/TextForm.js";
import React, { useState } from "react";
// import About from "./components/About.js";
function App() {
  const [mode, setMode] = useState("light");
  const [labelText, setLabelText] = useState("Enable Dark Mode");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setLabelText("Enable Light Mode");
      document.body.style.backgroundColor = "#151922";
      document.body.style.color = "white";
      document.getElementById("myBox").style.backgroundColor = "#191C20";
      document.getElementById("myBox").style.color = "white";
    } else {
      setMode("light");
      setLabelText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.getElementById("myBox").style.backgroundColor = "white";
      document.getElementById("myBox").style.color = "black";
    }
  };

  return (
    <>
      <Nav
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
        labelText={labelText}
      />
      <div className="container">
        <TextForm heading="Enter a text to analyze" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
