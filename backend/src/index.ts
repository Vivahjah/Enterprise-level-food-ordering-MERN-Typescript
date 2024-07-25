import express, { Response, Request } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import connectDB from "./DB/connect";



const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
    res.json({ message: "Hello World!" });
});
const port = process.env.port || 7000
const startServer = async() => {
    try {
        await connectDB()
        app.listen(7000, () =>
            console.log(`server running on port ${port}`)
        );
        
    } catch (error) {
        console.log(error);
    }
}

startServer();








