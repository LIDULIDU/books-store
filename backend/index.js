import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

app.use(cors());

//middleware
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use('/books', booksRoute);



//1st way

// app.use(cors());    
// 2nd way
app.use(
    cors({
        origin:"http://localhost:5555",
        methods:['GET','POST','PUT','DELETE'],
        allowedHeaders:['Content-Type'],
    })
)
app.get('/', (req, res) => {
    console.log(req)
    return res.status(234).send('welcome to MERN stack tutorial')
});

mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('App is connected to database');
        app.listen(PORT, () => {
            console.log(`app is listening to port :${PORT}`);
        });

    })
    .catch((error) => {
        console.log(error);
    });