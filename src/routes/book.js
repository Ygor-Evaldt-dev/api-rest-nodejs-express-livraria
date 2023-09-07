import express from "express";
import BookController from "../controllers/BookController.js";

const router = express.Router();

router
    .get("/books", BookController.list)
    .get("/books/search", BookController.listByPublisher)
    .get("/books/:id", BookController.listById)

export default router;