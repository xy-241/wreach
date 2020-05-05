let md5 = require("md5");

class Account {
  constructor(username, password, description) {
    this.username = username;
    this.userid = undefined;
    // this.password = password;
    this.description = description;
    this.passwordHash = md5(password);
  }
  updatePassword(current, newPass, newPassConfirm) {}
  userPreferences = {};
}

// class userAccount {
//   constructor(username, password, description, type = "user") {
//     Account.call(this, username, password, description);
//     this.type = type;
//   }
// }
// class specialistAccount {
//   constructor(username, password, description, type = "specialist") {
//     Account.call(this, username, password, description);
//     this.type = type;
//     this.assignments = [];
//   }
// }
// class adminAccount {
//   constructor(username, password, description, type = "admin") {
//     Account.call(this, username, password, description);
//     this.type = type;
//   }
// }

export default Account;
