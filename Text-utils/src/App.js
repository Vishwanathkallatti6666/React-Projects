import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  //this is to set by default the mode to light
  const [mode, setmode] = useState("light"); // we need to use usestate before the return .
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
  //Dark and light mode toggle  functionality
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      showAlert("Dark mode enabled", "success");
      document.body.style.backgroundColor = "#13263f";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        nav1="About Me"
        nav2="Contact Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container">
        <TextForm title="Enter the text below to analyze" mode={mode} />
      </div>
      <About />
    </>
  );
}

export default App;
