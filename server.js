const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const petRouter = require('./controllers/pets');

const app = express();

dotenv.config();

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.json());
app.use(morgan('dev'));

app.use('/pets', petRouter);

app.listen(3000, () => {
    console.log('The express app is ready!');
});

