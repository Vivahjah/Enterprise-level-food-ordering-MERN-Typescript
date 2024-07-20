import express, { Response, Request } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import connectDB from "./DB/connect";

const MONGO_URI = "mongodb+srv://vivahjah:jJwuWrNmdS8Db8f2@enterprise-food-orderin.xlvlqva.mongodb.net/?retryWrites=true&w=majority&appName=enterprise-food-ordering-app"
mongoose.connect(MONGO_URI).then(()=> console.log("Connected to db")).catch((error) => console.log(error))

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
    res.json({ message: "Hello World!" });
});

const startServer = async() => {
    try {
        await connectDB()
        app.listen(7000, () =>
            console.log("Connected to DB!!")
        );
        
    } catch (error) {
        console.log(error);
    }
}

startServer();








