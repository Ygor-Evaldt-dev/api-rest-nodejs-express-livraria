import express from "express";
import DataBase from "./config/DataBase.js";
import route from "./routes/index.js";

DataBase.connect();

const app = express();
route(app);

export default app;