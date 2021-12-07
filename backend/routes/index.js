import express from 'express'
import DataStore from 'nedb'
import morgan from 'morgan'
import mongoose from 'mongoose'
import nodemon from 'nodemon'
import concurrently from 'concurrently'
import { Double } from 'bson'


//Start express
const app = express()
const PORT = process.env.PORT || 8000

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

app.use(express.json())

app.all('/:id', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Method", "GET, POST, OPTION");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next()
  });
  app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Method", "GET, POST, OPTION");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next()
  });
//API

//Create
app.get('/api', (req, res) => {
    const data = {
        username: 'hugo',
        time_on_ticktok: 2,
        age: 21
    };
    Form.find({ })
        .then((data) => {
            console.log('Data', data);
            res.status(200).json(data);
        })

        .catch((error) => {
            console.log('error', daerrorta);
        });
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