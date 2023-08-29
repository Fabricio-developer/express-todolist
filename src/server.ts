import express from "express";
import mongoose from 'mongoose'
import cors from 'cors';

const routes = require('./routes/routes');
const todo = require('./routes/todoRoute');

// DB connection
require('dotenv').config();

const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const app = express();

app.use(cors());
app.use(express.json());

// Routing

app.use('/api', [routes, todo])

app.listen(3001, () => console.log("Server is running at http://localhost:3001"))


