const mongoose = require("mongoose");
const exSchema = require("mongoose-extended-schema");

let UserSchema = require("./user");

const specialist = mongoose.model("Specialist", exSchema(UserSchema, {}));

export default specialist;
