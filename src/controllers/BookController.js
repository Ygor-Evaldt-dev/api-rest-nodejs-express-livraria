import HttpResponse from "../utils/helpers/HttpResponse.js"
import bookModel from "../models/BookModel.js";

export default class BookController {
    static async list(req, res) {
        try {
            const books = await bookModel.find().populate("author").exec();
            if (!books[0]) {
                HttpResponse.notFound({ req, res });
                return;
            }
            HttpResponse.ok({ req, res, body: books });
        } catch (error) {
            HttpResponse.internalServerError({ req, res, body: error });
        }
    }

    static async listById(req, res) {
        const { id } = req.params;
        try {
            const book = await bookModel.findById(id).populate("author", "name").exec();
            if (!book) {
                HttpResponse.notFound({ req, res });
                return;
            }
            HttpResponse.ok({ req, res, body: book });
        } catch (error) {
            HttpResponse.internalServerError({ req, res, body: error });
        }
    }

    static async listByPublisher(req, res) {
        const { publisher } = req.query.publisher;
        try {
            const params = {
                "publisher": publisher,
            }
            const books = await bookModel.find(params, {});
        } catch (error) {
            HttpResponse.internalServerError({ req, res, body: error });
        }
    }
}