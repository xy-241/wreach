import user from "./userAccount";
import react from "react";

//individual assignments created by regular users, accepted by specialist users and can be fully modified by admin users

class Assignment {
  constructor(title, description, createdBy) {
    this.title = title;
    this.description = description;
    this.createdBy = createdBy;
    this.solved = false;
  }
  edit() {}
  del() {}
}

//pushes an example assignment
let assignment0 = new Assignment(
  "Broken Iphone screen",
  "My iphone screen broke because it fell while I was playing angry birds and now i am angry pls fix",
  user
);

let assignmentDisplay = function (assignment = assignment0) {
  return react.createElement("div", { class: "assignmentItem" }, [
    react.createElement("h2", null, assignment.title),
    react.createElement("p", null, assignment.description),
    react.createElement("p", null, `- ${assignment0.createdBy.username}`),
  ]);
};

export default assignmentDisplay;
