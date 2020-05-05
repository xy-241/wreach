import React from "react";
import navigation from "./components/navigation";
import userPanel from "./components/userPanel";
import assignmentDisplay from "./components/assignment";
import "./App.css";

////////erin's changes
let tempLoginPage = () => {
  return React.createElement(
    "div",
    { id: "logincontent", style: { textAlign: "center" } },
    [
      React.createElement(
        "div",
        null,
        /*#__PURE__*/ React.createElement("input", {
          type: "text",
          id: "username",
          placeholder: "USERNAME",
        })
      ),
      React.createElement(
        "div",
        null,
        /*#__PURE__*/ React.createElement("input", {
          type: "text",
          id: "password",
          placeholder: "PASSWORD",
        })
      ),
      React.createElement(
        "button",
        {
          onclick: "myFunction()",
          id: "loginbtn",
        },
        "LOG IN"
      ),
      React.createElement(
        "a",
        {
          href: "http://www.google.com",
          id: "forgotlink",
        },
        "Forgot password?"
      ),
      React.createElement(
        "div",
        {
          id: "signuptext",
        },
        /*#__PURE__*/ React.createElement(
          "p",
          null,
          "Don't have an account? ",
          /*#__PURE__*/ React.createElement(
            "a",
            {
              href: "google.com",
              id: "signuplink",
            },
            "Sign up"
          )
        )
      ),
    ]
  );
};

////////

let logo = React.createElement("div", { id: "logo" }, [
  React.createElement("img", { src: "resources/wrenchBlack.png" }),
]);

let App = () => {
  return React.createElement("div", {}, [
    logo,
    userPanel(),
    navigation.nav(),
    React.createElement(
      "div",
      {
        onClick: function () {
          navigation.openNav();
        },
        id: "openBtn",
      },
      React.createElement("i", { class: "fas fa-bars" })
    ),
    tempLoginPage(),
    assignmentDisplay(),
  ]);
};

export default App;
