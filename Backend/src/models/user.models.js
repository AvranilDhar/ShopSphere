import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    fullname : {
        type: String,
        required: true,
        trim: true,
    },
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
        required: [true,"Password is required"]
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
    },
    refreshtoken : {
        type: String
    }

},{timestamps: true});

userSchema.pre("save", async function (next) {
    if( !this.isModified("userPassword")) return next();
    this.userPassword = bcrypt.hash(this.userPassword, 10);
    next();
});

userSchema.methods.isPasswordCorrect = async function (userPassword) {
    return await bcrypt.compare(userPassword,this.userPassword)
}

userSchema.methods.generateAccessToken = function () {
    jwt.sign ({
        _id: this._id,
        username: this.username,
        fullname: this.fullname
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: ACCESS_TOKEN_EXPIRY
    })
}
userSchema.methods.generateRefreshToken = function () {
    jwt.sign ({
        _id: this._id,
        username: this.username,
        fullname: this.fullname
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn: REFRESH_TOKEN_EXPIRY
    })
}
export const User = mongoose.model("User",userSchema);