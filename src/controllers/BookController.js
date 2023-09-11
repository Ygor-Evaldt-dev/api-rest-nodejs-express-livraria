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
        try {
            const { id } = req.params;
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
        try {
            const params = {
                "publisher": req.query.publisher
            }
            const queryOptions = {};
            const books = await bookModel.find(params, queryOptions);
            if (!books[0]) {
                HttpResponse.notFound({ req, res });
                return;
            }
            HttpResponse.ok({ req, res, body: books });
        } catch (error) {
            HttpResponse.internalServerError({ req, res, body: error });
        }
    }

    static async create(req, res) {
        try {
            const newBook = await new bookModel(req.body).save();
            HttpResponse.created({ req, res, body: newBook });
        } catch (error) {
            HttpResponse.internalServerError({ req, res, body: error });
        }
    }

    static async update(req, res) {
        try {
            const { id } = req.params;
            const queryUpdate = {
                $set: req.body
            }
            await bookModel.findByIdAndUpdate(id, queryUpdate);
            HttpResponse.ok({ req, res, body: queryUpdate.$set });
        } catch (error) {
            HttpResponse.internalServerError({ req, res, body: error });
        }
    }

    static async delete(req, res) {
        try {
            const { id } = req.params;
            await bookModel.findByIdAndDelete(id);
            HttpResponse.accepted({ req, res });
        } catch (error) {
            HttpResponse.internalServerError({ req, res, body: error });
        }
    }
}