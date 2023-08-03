import React, { useState } from "react";

// this state is used to store and manage the text entered by the user. The initial value of the text state is set to "Enter text here", but it can be changed through the setText function as the user interacts with the component.

export default function TextForm(props) {
  const handeUpClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.alert("Converted to uppercase", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handeLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.alert("Converted to lowercase", "success");
  };

  const titleCase = () => {
    let newText = text.toLowerCase().split(" ");
    for (let i = 0; i < newText.length; i++) {
      newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
    }
    setText(newText.join(" "));
    props.alert("Converted to title case", "success");
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.alert("Copied to clipboard", "success");
  };

  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.alert("Extra spaces removed", "success");
  };
  const [text, setText] = useState("");
  //text is a state variable and setText is a function that is used to update the value of text.
  // text = ""; >> this is the wrong way of updating the text state. we use setText() function to update the text state.
  return (
    <>
      <div
        className="container"
        style={{
          // here is two brackets one is for the style attribute and the other is for the object.
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1 className="my-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control border-2"
            value={text} // if just I set this we cannot update the text area, if you put here a simple variabe react will not allow you to change the value of the text area bcz its only change state variables.
            onChange={handleOnChange} // so we need to set the onChange event handler
            //when this event is used we got a free event object which is passed to the function which is called when the event is triggered.
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#2A2B2D" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handeUpClick}>
          Convert To UPPER case
        </button>
        <button className="btn btn-primary mx-1" onClick={handeLowClick}>
          Convert To lower case
        </button>
        <button className="btn btn-primary mx-1" onClick={titleCase}>
          Convert To Title Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={removeExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your text summery</h2>
        <p>
          {text.length === 0
            ? "0"
            : text.charAt(text.length - 1) === " "
            ? text.split(" ").length - 1
            : text.split(" ").length}{" "}
          words, and {text.length} characters
        </p>
        <p>
          {text.length === 0
            ? "0"
            : text.charAt(text.length - 1) === " "
            ? 0.008 * text.split(" ").length - 0.008
            : 0.008 * text.split(" ").length}{" "}
          Minuits Read
        </p>
        <h2>Preview</h2>
        <p>{text.length >= 1 ? text : "Enter text to preview"}</p>
      </div>
    </>
  );
}
