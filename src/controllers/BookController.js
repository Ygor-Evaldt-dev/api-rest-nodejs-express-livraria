import HttpResponse from "../utils/helpers/HttpResponse.js"
import bookModel from "../models/BookModel.js";

export default class BookController {
    static async list(req, res) {
        try {
            const books = await bookModel.find().populate("author").exec();
            if (!books[0]) {
                HttpResponse.notFound(req, res);
                return;
            }
            HttpResponse.ok({ req, res, body: books });
        } catch (error) {
            HttpResponse.internalServerError({ req, res, body: error });
        }
    }
}