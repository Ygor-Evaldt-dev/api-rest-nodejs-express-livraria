import express from "express";
import BookController from "../controllers/BookController.js";

const router = express.Router();

router
    .get("/books", BookController.list)
    .get("/books/search", BookController.listByPublisher)
    .get("/books/:id", BookController.listById)
    .post("/books", BookController.create)
    .put("/books/:id", BookController.update)
    .delete("/books/:id", BookController.delete)

export default router;