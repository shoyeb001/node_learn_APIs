import express from "express";
import {PORT} from "./config/index.js"
import routes from "./routes/route.js"
import connection from "./utils/connection.js";
import cookieparser from "cookie-parser";
import errorHandeler from "./middleware/errorHandeler.js";
import path from "path";

//create global var

global.appRoot = path.resolve(__dirname);


const app = express();
app.use(express.urlencoded({ extended: false})); // used for understand img
app.use(express.json());
app.use(cookieparser());
app.use(routes);

app.use(errorHandeler);
connection();

app.listen(PORT,()=>console.log(`server has been started at ${PORT}`));
