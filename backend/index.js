// creating api request using api server
import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import morgan from 'morgan' 
import bodyParser from "body-parser"; 
import cookieParser from "cookie-parser";
import errorHandler from "./middleware/error.js";
import authRoutes from "./routes/authRoutes.js"

const app = express()
const port = process.env.PORT || 9000
dotenv.config();


// DB connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(() => console.log("DB connected"))
.catch((err) => console.log(err));


// MIDDLEWARES
app.use(morgan('dev'));
app.use(bodyParser.json({limit: "5mb"}));
app.use(bodyParser.urlencoded({
    limit: "5mb",
    extended: true
}));

// for authentication
app.use(cookieParser());

// to make request to the backend
// to allow application to use backend api to access to the server
app.use(cors());
app.use(express.json());
// error middleware
app.use(errorHandler);


// Routes Middleware
app.get('/', (req, res) => {
    res.send("Hello from backend");
});

app.use('/', authRoutes);



// this message will appear on the console if the backend server is connected
app.listen(port, () => {
    console.log(`Backend Connected to Port ${port}`)
});
