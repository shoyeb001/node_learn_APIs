import {DB_URL} from "../config/index.js";
import mongoose from "mongoose";

const connection = async()=>{
    console.log(DB_URL);
    try {
        await mongoose.connect(DB_URL);
        console.log("DB Connected...");
    } catch (error) {
        console.log("Error on connection",error.message);
    }
}

export default connection;
