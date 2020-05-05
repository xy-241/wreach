const mongoose = require("mongoose");
const exSchema = require("mongoose-extended-schema");

let UserSchema = require("./user")[0];

const admin = mongoose.model("Admin", exSchema(UserSchema, {}));

export default admin;
