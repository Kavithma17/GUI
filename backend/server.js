const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

const db = musql.createConnection(
    {
        host: "localhost",
        user : "root",
        password : "",
        detabase :"signup"
    }
)