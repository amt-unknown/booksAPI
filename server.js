const express = require('express')
const mongoose = requier('mongoose')

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

app.listen(PORT)