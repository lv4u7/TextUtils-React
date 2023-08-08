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

  // I have writen this function but it is not working properly it was ignoring the first letter after enter key.

  // const titleCase = () => {
  //   let newText = text.toLowerCase().split(" ");
  //   for (let i = 0; i < newText.length; i++) {
  //     newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
  //   }
  //   setText(newText.join(" "));
  //   props.alert("Converted to title case", "success");
  // };
  const titleCase = () => {
    const lines = text.split("\n"); // Split text into lines
    const newText = lines.map((line) => {
      const words = line.trim().split(" "); // Split each line into words
      const titleCaseWords = words.map((word) => {
        if (word.length === 0) {
          return ""; // Handle empty words
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      });
      return titleCaseWords.join(" "); // Join words back into a line
    });
    setText(newText.join("\n")); // Join lines back into the text
    props.alert("Converted to title case", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.alert("Copied to clipboard", "success");
  };

  const handleClear = () => {
    setText("");
    props.alert("Text cleared", "success");
  };
  //I have wrotten this function to removing extra spaces but it was ignoring the first space after enter key.

  // const removeExtraSpaces = () => {
  //   let newText = text.split(/\s/);
  //   setText(newText.join(" "));
  //   props.alert("Extra spaces removed", "success");
  // };

  const removeExtraSpaces = () => {
    let newText = text.replace(/\s+/g, " ").trim(); // Replace multiple spaces with a single space and trim leading/trailing spaces
    setText(newText);
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
        <h1 className="mb-4 my-3">{props.heading}</h1>
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
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handeUpClick}
        >
          Convert To UPPER case
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handeLowClick}
        >
          Convert To lower case
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={titleCase}
        >
          Convert To Title Case
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClear}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={removeExtraSpaces}
        >
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
          {
            // with this function filter we can avoid the extra spaces in the text, to show accurate number of words.
            // filter is a higher order function which takes a function as an argument and filter the array based on the condition.
            text.split(/\s+/).filter((e) => {
              // here we use regular expression to split the text based on the spaces, space or new line.
              return e.length !== 0;
            }).length
          }{" "}
          words, and {text.length} characters
        </p>
        <p>
          {text.split(/\s+/).filter((e) => {
            // here we use regular expression to split the text based on the spaces, space or new line.
            return e.length !== 0;
          }).length * 0.008}{" "}
          Minuits Read
        </p>
        <h2>Preview</h2>
        <p>{text.length >= 1 ? text : "Enter text to preview"}</p>
      </div>
    </>
  );
}
