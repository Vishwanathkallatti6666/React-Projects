import React from "react";

export default function Navbar(props) {
  // function handleRadioButtonChange() {
  //   const selectedRadio = document.querySelector(
  //     'input[name="option"]:checked'
  //   );
  //   if (selectedRadio) {
  //     const selectedValue = selectedRadio.value;
  //     if (selectedValue === "option1") {
  //       alert("green selected");
  //       // Add any other actions you want to perform for Option 1
  //     } else if (selectedValue === "option2") {
  //       alert("red selected");
  //       // Add any other actions you want to perform for Option 2
  //     } else if (selectedValue === "option3") {
  //       alert("yellow selected");
  //       // Add any other actions you want to perform for Option 2
  //     }
  //   } else {
  //     console.log("No radio button is checked.");
  //   }
  // }
  // const option1Radio = document.getElementById("option1");
  // const option2Radio = document.getElementById("option2");
  // const option3Radio = document.getElementById("option3");

  // option1Radio.addEventListener("change", handleRadioButtonChange);
  // option2Radio.addEventListener("change", handleRadioButtonChange);
  // option3Radio.addEventListener("change", handleRadioButtonChange);

  return (
    <nav
      className={`navbar bg-${props.mode} border-bottom border-bottom-${props.mode}`}
      data-bs-theme={props.mode}
    >
      {/* <!-- Navbar content --> */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom-dark navbar bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  {props.nav1}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {props.nav2}
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                {" "}
                Search{" "}
              </button>
            </form>
            <div
              className={`form-check  mx-2 form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <label className="form-check-label" for="flexSwitchCheckDefault">
                Enable dark mode
              </label>
              <input
                className="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
            </div>
            {/* <div>
              <input
                type="radio"
                name="option"
                value="option1"
                id="option1"
                checked
              />
              Option 1
              <input type="radio" name="option" value="option2" id="option2" />
              Option 2
              <input type="radio" name="option" value="option3" id="option3" />
              Option 3
            </div> */}
          </div>
        </div>
      </nav>
    </nav>
  );
}
