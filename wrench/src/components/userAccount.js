import Account from "./Account";
let md5 = require("md5");
//not really using this for production just testing something -s

//placeholder user until db implement
let placeholderUser = {
  username: "John Doe",
  password: "password",
  userid: "",
};

let accounts = {};
function createAccount(username, password) {
  let account;
  account = new Account(username, password);
  account.userid = "5ee44d71198f76bc14cba14c";
  accounts[username] = account;
}
//I will rewrite this part, leave it as is for now -s
function writeDescription(account, description) {
  let accx = new Account(account.username, account.password);
  accx.description = description;
}

function login(username, password) {
  if (accounts[username].passwordHash === md5(password)) {
    return 1;
  }
  throw "Invalid Login Exception";
}

export default placeholderUser;
