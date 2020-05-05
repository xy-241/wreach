import react from "react";

function genericPage(title, content, additionalParams = {}) {
  return react.createElement("div", additionalParams, [
    react.createElement("h2", null, title),
    react.createElement("p", null, content),
  ]);
}

let pages = [];

export default pages;
