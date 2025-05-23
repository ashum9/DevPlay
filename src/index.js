import mongoose from "mongoose";
import { DB_NAME } from "./constant";

import express from "express"

const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error" , (error) => {
            console.log("app connection me error aagyi hai " , error);
            throw error;
        })

        app.listen(process.env.PORT , () => {
            console.log(`server is running on port : ${process.env.PORT}`);
            
        })

    } catch (error) {
        console.error("database connect hone me error aa gyi" , error)
        throw error
    }
})()