import HttpResponse from "../utils/helpers/HttpResponse.js"

export default class BookController {
    static list(req, res) {
        const { status, body } = HttpResponse.ok({ message: "Lista de livros" });
        res.status(status).json(body);
    }
}