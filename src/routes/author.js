import express from "express";
import AuthorController from "../controllers/AuthorController.js";

const router = express.Router();

router
    .get("/authors", AuthorController.list);

export default router;