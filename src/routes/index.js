import express from "express";
import book from "./book.js";
import HttpResponse from "../utils/helpers/HttpResponse.js";

export default function route(app) {
    app.route('/').get((req, res) => {
        const { status, body } = HttpResponse.ok({ message: "Ok" });
        res.status(status).json(body);
    });

    app.use(
        express.json(),
        book
    );
}