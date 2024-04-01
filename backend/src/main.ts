import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnection from './utils/dbConnection';
dotenv.config();

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World");
})
app.listen(3001, () => console.log("Server is running on port 3001"));

dbConnection();


