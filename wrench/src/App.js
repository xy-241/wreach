import React from "react";
import navigation from "./components/navigation";
import userPanel from "./components/userPanel";
import assignmentDisplay from "./components/assignment";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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

let logo = (
  <div id="logo">
    <img src="resources/wrenchBlack.png"></img>
  </div>
);

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

function routenavlist() {
  return [
    <li to="/">Home</li>,
    <li to="/repair">Repair</li>,
    <li to="/workshops">Workshops</li>,
    <li to="/user">User</li>,
  ];
}
function routeswitchlist() {
  return (
    <Switch>
      <Route exact path="/">
        Home
      </Route>
      <Route path="/repair">Repair</Route>
      <Route path="/workshops">Workshops</Route>
      <Route path="/user">User</Route>
    </Switch>
  );
}
function testRouting() {
  return (
    <Router>
      <div>
        <ul>
          <routenavlist />
          <routeswitchlist />
        </ul>
      </div>
    </Router>
  );
}

function Home() {
  return React.createElement(
    "div",
    null,
    React.createElement("h2", null, "Home")
  );
}
function Repair() {
  return React.createElement(
    "div",
    null,
    React.createElement("h2", null, "Repair")
  );
}

function Workshops() {
  return React.createElement(
    "div",
    null,
    React.createElement("h2", null, "Workshops")
  );
}

function User(user) {
  return React.createElement(
    "div",
    null,
    React.createElement("h2", null, `Welcome ${user}`)
  );
}

export default App;
