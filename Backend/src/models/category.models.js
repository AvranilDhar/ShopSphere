import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        index: true
    }
},{timestamps: true});

export const Category = mongoose.model("Category", categorySchema);