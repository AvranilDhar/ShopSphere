import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(cookieParser());

app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}));

app.use(express.json({
    limit: "16kb"
 }));

app.use(express.static("public"));

export default app;