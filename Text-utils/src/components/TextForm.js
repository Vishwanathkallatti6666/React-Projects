import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handledownClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const ClearText = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = "";
    setText(newText);
  };
  //check below code logic:copying text and removing extra spaces(using regular expression)
  const hadlecopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/\s+/);
    setText(newText.join(" "));
  };
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div>
        <h1
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          {props.title}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handledownClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={ClearText}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={hadlecopy}>
          Copy text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h4>your text summary.</h4>
        <p>
          {text.split(" ").length} words and {text.length}characters.
        </p>
        <p>{0.008 * text.split("").length}minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "enter something in the text above to preview"}
        </p>
      </div>
    </>
  );
}
