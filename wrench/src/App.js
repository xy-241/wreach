import React from "react";
import "./App.css";

let userPanel = (username) => {
  return React.createElement("div", { id: "userPanel" }, [
    React.createElement("img", {
      id: "userImage",
      src: "resources/userDefault.png",
    }),
    React.createElement("h2", {}, "John Doe"),
    React.createElement("p", {}, "@JohnDoe"),
  ]);
};
//nav
function openNav() {
  document.getElementById("nav").style.width = "100%";
}

function closeNav() {
  document.getElementById("nav").style.width = "0%";
}

let nav = () => {
  return React.createElement("div", { id: "nav", class: "overlay" }, [
    React.createElement(
      "a",
      {
        onClick: function () {
          closeNav();
        },
        href: "javascript:void(0)",
      },
      "x"
    ),
    React.createElement("div", { class: "overlayContent" }, [
      React.createElement("a", { class: "navlink" }, "repair"),
      React.createElement("a", { class: "navlink" }, "status"),
      React.createElement("a", { class: "navlink" }, "workshops"),
      React.createElement("a", { class: "navlink" }, "payments"),
      React.createElement("a", { class: "navlink" }, "settings"),
    ]),
  ]);
};

let logo = React.createElement("div", { id: "logo" }, [
  React.createElement("img", { src: "resources/wrenchBlack.png" }),
]);

let App = () => {
  return React.createElement("div", {}, [
    logo,
    userPanel(),
    nav(),
    React.createElement(
      "div",
      {
        onClick: function () {
          openNav();
        },
        id: "openBtn",
      },
      "open"
    ),
  ]);
};

export default App;
