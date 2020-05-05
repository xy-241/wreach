import react from "react";

//globals
let username = "John Doe";
let userid = "F4E7B6AEF6";

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
