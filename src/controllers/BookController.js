import HttpResponse from "../utils/helpers/HttpResponse.js"
import bookModel from "../models/BookModel.js";

export default class BookController {
    static async list(req, res) {
        const books = await bookModel.find().exec();

        const { status, body } = HttpResponse.ok(books);
        res.status(status).json(body);
    }
}