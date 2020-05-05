import react from "react";
import user from "./userAccount";

let username = user.username;
let userid = user.userid;

let userPanel = () => {
  return react.createElement("div", { id: "userPanel" }, [
    react.createElement("img", {
      id: "userImage",
      src: "../resources/userDefault.png",
    }),
    react.createElement(
      "h2",
      {},
      react.createElement("a", { href: `/users/${userid}` }, username)
    ),
    react.createElement("p", {}, "@" + username.replace(/\s/g, "")),
  ]);
};

export default userPanel;
