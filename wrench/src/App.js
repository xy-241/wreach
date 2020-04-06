import React from "react";
import "./App.css";
// import { render } from "react-dom";

//globals
let username = "John Doe";
let state = "home";
//login, home, repair, status, workshops, payment, settings
// eslint-ignore-next-line
let content;

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

let tempPage = (header, p1) => {
  return React.createElement("div", { id: "content" }, [
    React.createElement("header", {}, header),
    React.createElement("p", {}, p1),
  ]);
};

let renderContent = (state) => {
  // let content;
  if (state === "login") {
    //after database implementation
    //this is only temporary, ill change this to proper state based ui -S
    content = 1;
  }
  if (state === "home") {
    content = tempPage("Home", "Welcome, " + username);
  }
  if (state === "repair") {
    content = tempPage("Repair", "repair page");
  }
  if (state === "workshop") {
    content = tempPage("Workshops", "workshop page");
  }
  if (state === "payment") {
    content = tempPage("Payment", "payment page");
  }
  if (state === "settings") {
    content = tempPage("Settings", "settings page");
  }
  return content ? content : tempPage("Error", "An error has occured");
};

let navLink = (iclass, text, destination) => {
  return React.createElement(
    "a",
    // eslint-disable-next-line
    {
      class: "navlink",
      // eslint-disable-next-line
      href: "javascript:console.log(" + 0 + ");",
    },
    [React.createElement("i", { class: iclass }), text]
  );
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
        href: "#",
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
    renderContent(state),
  ]);
};

export default App;
