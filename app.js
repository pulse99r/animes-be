// server dependencies
const express = require('express')
const app = express() // stores an instance of express
const animesController = require('./controllers/animes')

// create routes

app.get('/',(request, response)=>{
  console.log(request)
  response.send('Welcome to Animania!')
}) // ()=>{} anonymous function is middleware
app.use("/animes", animesController)


module.exports = app;