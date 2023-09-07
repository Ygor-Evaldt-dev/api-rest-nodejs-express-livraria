import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

export default class DataBase {
    static connect() {
        try {
            mongoose.connect(process.env.URI);
            mongoose.connection.once('open', () => {
                console.log("Conexão com MongoDB estabelecida com suceeso.");
            });
        } catch (error) {
            console.error("Erro ao conectar com MongoDB -> " + error);
        }
    }
}