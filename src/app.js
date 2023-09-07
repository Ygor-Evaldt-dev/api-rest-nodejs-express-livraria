import express from "express";
import DataBase from "./config/DataBase.js";
import Route from "./routes/index.js";

const app = express();
DataBase.connect();
Route.init(app);

export default app;