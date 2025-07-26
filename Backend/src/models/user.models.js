import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    userName : {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    userEmail : {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    userPassword : {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        enum : ["MALE", "FEMALE", "OTHERS"],
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        match: '^[0-9]{10}$'
    }
},{timestamps: true});

export const User = mongoose.model("User",userSchema);