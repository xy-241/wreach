import react from "react";

function genericPage(page, additionalParams) {
  return react.createElement("div", additionalParams, [
    react.createElement("h2", null, page.title),
    react.createElement("p", null, page.content),
  ]);
}

let pages = [];

export default pages;
