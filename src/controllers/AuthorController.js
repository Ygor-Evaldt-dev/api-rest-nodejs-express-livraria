import HttpResponse from "../utils/helpers/HttpResponse.js"
import authorModel from "../models/AuthorModel.js";

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
            HttpResponse.internalServerError({ req, res, body: error });
        }
    }
}