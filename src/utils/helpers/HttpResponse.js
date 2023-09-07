export default class HttpResponse {
    static ok({ req, res, body = {} } = {}) {
        res.status(200).json(body);
    }

    static created({ req, res } = {}) {
        res.status(201).send("Registro criado com sucesso!");
    }

    static accepted({ req, res } = {}) {
        res.status(202).send("Registro deletado com sucesso !");
    }

    static notFound({ req, res } = {}) {
        res.status(404).json({
            message: "Nenhum registro encontrado."
        });
    }

    static internalServerError({ req, res, body = {} } = {}) {
        res.status(500).json(body);
    }
}