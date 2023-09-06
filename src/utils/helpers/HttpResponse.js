export default class HttpResponse {
    static ok(body) {
        return ({
            status: 200,
            body
        });
    }
}