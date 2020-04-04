import React from "react";
import "./App.css";

let navButtons = (mods) => {
  let repairBtn = React.createElement("button", { class: mods }, "Repair");
  let statusBtn = React.createElement("button", { class: mods }, "Status");
  let workshopsBtn = React.createElement(
    "button",
    { class: mods },
    "Workshops"
  );
  let paymentBtn = React.createElement("button", { class: mods }, "Payment");
  let settingsBtn = React.createElement("button", { class: mods }, "Settings");
  return React.createElement("div", {}, [
    repairBtn,
    statusBtn,
    workshopsBtn,
    paymentBtn,
    settingsBtn,
  ]);
};
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

let logo = React.createElement("div", { id: "logo" }, [
  React.createElement("img", { src: "resources/wrenchBlack.png" }),
]);

let App = () => {
  return React.createElement("div", {}, [
    logo,
    userPanel(),
    navButtons("btn btn-block navButtons"),
  ]);
};

export default App;
