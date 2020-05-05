import React from "react";

//helper fn
function openNav() {
  document.getElementById("nav").style.width = "25%";
}

function closeNav() {
  document.getElementById("nav").style.width = "0%";
}

let navLink = ({ iclass, text, destination }) => {
  return React.createElement(
    "a",
    {
      class: "navlink",
      href: destination,
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

export default { nav, openNav };
