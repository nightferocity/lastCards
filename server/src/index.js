import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import CardsController from "./controllers/CardsController";

const Cards = new CardsController();

const app = express();
mongoose.connect('mongodb://localhost/flashcards');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.post('/cards', Cards.create);
app.get('/cards', Cards.index);
app.get('/cards/:cardId', Cards.read);
app.delete('/cards/:cardId', Cards.delete);
app.put('/cards/:cardId', Cards.update);

app.listen(2020, () => {
    console.log("It's alive! It's alive!")
});