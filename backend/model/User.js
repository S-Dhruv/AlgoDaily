import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    googleId: { 
        type: String, 
        required: true, 
        unique: true 
    },
    logins: [
        {
            type: Date,
            default: Date.now,
        }
    ]
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
