const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true } // Ensure password is hashed before storing
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
