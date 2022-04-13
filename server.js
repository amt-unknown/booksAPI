const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()
PORT = process.env.PORT

const app = express()
app.use(express.json())
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => {console.log('connected to mongo: ', process.env.MONGO_URI)}
)
app.get('/', (req,res) => {
    res.send('Hello World')
})

const booksController = require('./controllers/books_controller.js')
app.use('/books', booksController)

app.get('*', (req,res) => {
    res.status(404).send('404 error: page does not exist');
});

app.listen(PORT)