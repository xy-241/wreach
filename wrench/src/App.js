import React from "react";
import "./App.css";

//globals
let username = "John Doe";
let state = "login";
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


////////erin's changes
let tempLoginPage = () => {
  return React.createElement("center", { id: "logincontent" }, [
    React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
      type: "text",
      id: "username",
      placeholder: "USERNAME"
    })),
    React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
      type: "text",
      id: "password",
      placeholder: "PASSWORD"
    })),
    React.createElement("button", {
      onclick: "myFunction()",
      id: "loginbtn"
    }, "LOG IN"),
    React.createElement("a", {
      href: "http://www.google.com",
      id: "forgotlink"
    }, "Forgot password?"),
    React.createElement("div", {
      id: "signuptext"
    }, /*#__PURE__*/React.createElement("p", null, "Don't have an account? ", /*#__PURE__*/React.createElement("a", {
      href: "google.com",
      id: "signuplink"
    }, "Sign up")))
  ]);
};

////////







let renderContent = (state) => {
  // let content;
  if (state === "login") {
    //after database implementation
    //this is only temporary, ill change this to proper state based ui -S
    //content = 1;
    content = tempLoginPage();
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

let navLink = ({ iclass, text, destination }) => {
  return React.createElement(
    "a",
    {
      class: "navlink",
      href: destination,
    },
    [React.createElement("i", { class: iclass }), text]
  );
  // return (
  //   <a class="navlink" src={destination}>
  //     <i class={iclass}></i>
  //     {text}
  //   </a>
  // );
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
      React.createElement(navLink, {
        iclass: "fas fa-wrench",
        text: "Repair",
        destination: "undefined",
      }),
      React.createElement(navLink, {
        iclass: "fas fa-star-of-life",
        text: "Status",
        destination: "undefined",
      }),
      React.createElement(navLink, {
        iclass: "fas fa-graduation-cap",
        text: "Workshops",
        destination: "undefined",
      }),
      React.createElement(navLink, {
        iclass: "fas fa-credit-card",
        text: "Payment",
        destination: "undefined",
      }),
      React.createElement(navLink, {
        iclass: "fas fa-cog",
        text: "Settings",
        destination: "undefined",
      }),
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
