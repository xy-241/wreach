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

let logo = React.createElement("div", { id: "logo" }, [
  React.createElement("img", { src: "resources/wrenchBlack.png" }),
]);

const App = () => {
  return React.createElement("div", {}, [
    logo,
    navButtons("btn btn-block navButtons"),
  ]);
};

export default App;
