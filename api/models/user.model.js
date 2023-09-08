const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        email: {type: String, required: true, unique: true},
        phone: {type: String},
        password: {type: String, required: true},
        name: {type: String},
        lastName: {type: String},
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    {timestamps: true}
);
module.exports = mongoose.model("User", UserSchema);