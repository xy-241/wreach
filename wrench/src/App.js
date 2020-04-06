import React from "react";
import "./App.css";

//globals
let username = "John Doe";

let userPanel = (username) => {
  return React.createElement("div", { id: "userPanel" }, [
    React.createElement("img", {
      id: "userImage",
      src: "resources/userDefault.png",
    }),
    React.createElement("h2", {}, username),
    React.createElement("p", {}, "@" + username.replace(/\s/g, "")),
  ]);
};
//nav
function openNav() {
  document.getElementById("nav").style.width = "25%";
}

function closeNav() {
  document.getElementById("nav").style.width = "0%";
}

let navLink = (iclass, text, destination) => {
  return React.createElement("div", { class: "navlink" }, [
    React.createElement("i", { class: "iclass" }),
    React.createElement("a", { href: destination }, text),
  ]);
};
let nav = () => {
  return React.createElement("div", { id: "nav", class: "overlay" }, [
    React.createElement(
      "a",
      {
        onClick: function () {
          closeNav();
        },
        // eslint-disable-next-line
        href: "javascript:void(0)",
      },
      "x"
    ),
    //Repair Status Workshops Payments Settings
    React.createElement("div", { class: "overlayContent" }, [
      navLink("fas fa-wrench", "Repair", undefined),
      navLink("fas fa-star-of-life", "Status", undefined),
      navLink("fas fa-graduation-cap", "Workshops", undefined),
      navLink("fas fa-credit-card", "Payment", undefined),
      navLink("fas fa-cog", "Settings", undefined),
    ]),
  ]);
};

let logo = React.createElement("div", { id: "logo" }, [
  React.createElement("img", { src: "resources/wrenchBlack.png" }),
]);

let App = () => {
  return React.createElement("div", {}, [
    logo,
    userPanel(username),
    nav(),
    React.createElement(
      "div",
      {
        onClick: function () {
          openNav();
        },
        id: "openBtn",
      },
      React.createElement("i", { class: "fas fa-bars" })
    ),
  ]);
};

export default App;
