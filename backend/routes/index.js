import express from 'express'
import DataStore from 'nedb'
import morgan from 'morgan'
import mongoose from 'mongoose'
import nodemon from 'nodemon'
import { Double } from 'bson'

const PORT = 8000;

//BDD
const db = new DataStore({ filename: 'stat' })
db.loadDatabase()

//ID Password
//SimonHugo
//simon_hugo_groupe6

const MONGODB_URI = 'mongodb+srv://SimonHugo:simon_hugo_groupe6@pepitedb.nxjv8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

//Schema
const Schema = mongoose.Schema;
const FormSchema = new Schema({
    name: String,
    ticktock_time: Number,
    age: Number,
});

//Model
const Form = mongoose.model('Form', FormSchema);

//Saving data to our mongo database
const data = {
    name: 'Simon',
    ticktock_time: 2,
    age: 22,
};

const newForm = new Form(data); //instance of the model

newForm.save((error) => {
    if(error) {
        console.log('Ooooops, my bad !');
    }
        else{
            console.log('Data has been saved!');
        }
});

//Start express
const app = express()

app.use(express.json())

//API

//Create
app.get('/api', (req, res) => {
    const data = {
        username: 'hugo',
        time_on_ticktok: 2,
        age: 21
    };
    res.json(data);
});

app.get('/api/name', (req, res) => {
    const data = {
        username: 'simon',
        time_on_ticktock: 2,
        age: 22
    };
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Le serveur est lancé sur le port : ${PORT}`)
});