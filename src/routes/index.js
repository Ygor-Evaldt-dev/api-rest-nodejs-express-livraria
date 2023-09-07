import express from "express";
import book from "./book.js";
import author from "./author.js";
import HttpResponse from "../utils/helpers/HttpResponse.js";

export default class Route {
    static init(app) {
        app.route('/').get((req, res) => {
            HttpResponse.ok({ req, res, body: { message: "Ok" } })
        });

        app.use(
            express.json(),
            book,
            author
        );
    }
}