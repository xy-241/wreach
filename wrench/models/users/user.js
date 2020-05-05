const mongoose = require("mongoose");

let Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    minLength: 5,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    minLength: 5,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: false,
  },
  displayPicture: {
    type: String,
    required: false,
  },
});

export default userSchema;

// export default {
//   userSchema,
//   defaults: {
//     defaultDisplayPicture: "resources/userDefault.png",
//   },
// };
