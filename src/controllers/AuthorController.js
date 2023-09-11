import HttpResponse from "../utils/helpers/HttpResponse.js"
import authorModel from "../models/AuthorModel.js";
import bookModel from "../models/BookModel.js";

export default class BookController {
    static async list(req, res) {
        try {
            const authors = await authorModel.find().exec();
            if (!authors[0]) {
                HttpResponse.notFound({ req, res });
                return;
            }
            HttpResponse.ok({ req, res, body: authors });
        } catch (error) {
            HttpResponse.internalServerError({ req, res, body: { message: "Erro ao buscar autores", error } });
        }
    }

    static async listById(req, res) {
        try {
            const { id } = req.params;
            const author = await authorModel.findById(id).exec();
            if (!author) {
                HttpResponse.notFound({ req, res });
                return;
            }
            HttpResponse.ok({ req, res, body: author });
        } catch (error) {
            HttpResponse.internalServerError({ req, res, body: { message: "Erro ao buscar autor", error } });
        }
    }

    static async create(req, res) {
        try {
            const { body } = req;
            const newAuthor = await new authorModel(body).save();
            HttpResponse.created({ req, res, body: newAuthor });
        } catch (error) {
            HttpResponse.internalServerError({ req, res, body: { message: "Erro ao cadastrar autor", error } });
        }
    }


}