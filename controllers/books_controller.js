const express = require('express')
const Book = require("../models/book.js")

const books = express()

books.get('/', (req,res) => {
    Book.find()
        .then(foundBooks => {
            console.log(foundBooks)
            res.send(foundBooks)
        })
        .catch(err => {
            res.status(404).send('404')
        })
})

books.get('/:id', (req,res) => {
    Book.findById(req.params.id)
        .then(foundBook => {
            console.log(foundBook)
            res.send(foundBook)
        })
        .catch(err => {
            res.status(404).send('404')
        })
})

books.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body, { new: true})
        .then(updatedBook => {
            res.redirect(`/breads/${req.params.id}`)
        })
        .catch(err => {
            res.status(500).send('500')
        })
})

books.delete('/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id)
        .then(deletedBook => {
            res.redirect(`/breads`)
        })
        .catch(err => {
            res.status(500).send('500')
        })
})

books.post('/', (req, res) => {
    Book.create(req.body)
        .then(createBook =>  {
            res.redirect('/breads')
        })
        .catch(err => {
            res.status(500).send('500')
        })
})

module.exports = books
