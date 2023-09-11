import express from "express";
import AuthorController from "../controllers/AuthorController.js";

const router = express.Router();

router
    .get("/authors", AuthorController.list)
    .get("/authors/:id", AuthorController.listById)
    .post("/authors", AuthorController.create)


export default router;