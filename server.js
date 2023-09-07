import app from "./src/app.js";
import dotenv from "dotenv";
dotenv.config();

const { PORT } = process.env || 3000;
app.listen(PORT, () => {
    console.log(`API online no endereço http://localhost:${PORT}`);
});

