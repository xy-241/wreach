const mongoose = require("mongoose");
const exSchema = require("mongoose-extended-schema");

let UserSchema = require("./user")[0];

const specialist = mongoose.model("Specialist", exSchema(UserSchema, {}));

export default specialist;
