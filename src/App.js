import "./App.css";
import Nav from "./components/Nav.js";
import TextForm from "./components/TextForm.js";
import React, { useState } from "react";
import Alert from "./components/Alert.js";
import About from "./components/About.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [labelText, setLabelText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // wehave used them for the colors now we will comment them
  // const removeBodyClasses = () => {
  //   document.body.classList.remove("bg-light");
  //   document.body.classList.remove("bg-dark");
  //   document.body.classList.remove("bg-danger");
  //   document.body.classList.remove("bg-success");
  //   document.body.classList.remove("bg-warning");
  // };

  const toggleMode = (cls) => {
    // this is used to add a class to the body of the page and then we can use it to change the background color of the page
    // removeBodyClasses();
    document.body.classList.add(`bg-${cls}`);
    if (mode === "light") {
      setMode("dark");
      setLabelText("Enable Light Mode");
      document.body.style.backgroundColor = "#151922";
      showAlert("Dark mode has been enabled", "success");
      //this is for changing the title of the page
      // setInterval(() => {
      //   document.title = "Install TextUtils Now!";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Amazing TextUtils";
      // }, 3000);
    } else {
      setMode("light");
      setLabelText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Nav
          title="TextUtils"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
          labelText={labelText}
        />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Try Textutils - word counter, character counter, remove extra spaces"
                  alert={showAlert}
                  mode={mode}
                />
              }
            />
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
