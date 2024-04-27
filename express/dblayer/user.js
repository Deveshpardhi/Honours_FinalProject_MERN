const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    username: String,
    email: String,
    // Add more fields as needed
});

const User = mongoose.model("User", UserSchema);

module.exports = { User, UserSchema };
