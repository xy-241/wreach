const mongoose = require("mongoose");

let Schema = mongoose.Schema;

const assignmentSchema = new Schema({
  title: {
    type: String,
    minLength: 5,
    required: true,
  },
  description: {
    type: String,
    minLength: 10,
    required: true,
  },
  // postedBy: {
  //     type: Object,
  // },
  // attachments: {
  //     type: [Blob],
  // }
});

export default assignmentSchema;
