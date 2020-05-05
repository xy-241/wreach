import React from "react";

//helper fn
function openNav() {
  document.getElementById("nav").style.width = "25%";
}

function closeNav() {
  document.getElementById("nav").style.width = "0%";
}

let navLink = (iclass, text, destination) => {
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
      navLink("fas fa-wrench", "Repair", undefined),
      navLink("fas fa-star-of-life", "Status", undefined),
      navLink("fas fa-graduation-cap", "Workshops", undefined),
      navLink("fas fa-credit-card", "Payment", undefined),
      navLink("fas fa-cog", "Settings", undefined),
    ]),
  ]);
};

export default { nav, openNav };
