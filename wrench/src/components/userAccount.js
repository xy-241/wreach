import Account from "./Account";
let md5 = require("md5");
//not really using this for production just testing something -s

//account helpers
function generateId(cluster) {
  let result = "";
  let chars = "0123456789ABCDEF";
  //using only hex chars for now till further implementation
  let charLen = chars.length;
  for (let i = 0; i < 10; i++) {
    result += chars.charAt(Math.floor(Math.random() * charLen));
  }
  return result;
}

//placeholder user until db implement
let placeholderUser = {
  username: "John Doe",
  password: "password",
  userid: "",
};
//it generates a new id every execution
//this is intentional, im still testing something with this -s
placeholderUser.userid = generateId();

let accounts = {};
function createAccount(username, password, description) {
  let account;
  account = new Account(username, password, description);
  account.userid = generateId();
  accounts[username] = account;
}

function login(username, password) {
  if (accounts[username].passwordHash === md5(password)) {
    return 1;
  }
  throw "Invalid Login Exception";
}

export default placeholderUser;
