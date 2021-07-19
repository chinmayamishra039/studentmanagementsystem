const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
  },
  roll: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
  },
  age: {
    type: Number,
  },
  class: {
    type: Number,
    required: true,
  },
  totalworkingdays: {
    type: Number,
    required: true,
  },
  noofdayspresent: {
    type: Number,
    required: true,
  },
});

//userSchema.pre("save", async function () {
//   try {
//     console.log("called before saving a user");
//   } catch (error) {
//     next(error);
//   }
// });
// userSchema.post("save", async function () {
//   try {
//     console.log("called after saving a user");
//   } catch (error) {
//     next(error);
//   }
// }); u
//create collection of Users
const User = new mongoose.model("User", userSchema);
module.exports = User;
