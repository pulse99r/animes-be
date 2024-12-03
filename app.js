// server dependencies
const express = require('express')
const app = express() // stores an instance of express
const animesController = require('./controllers/animes')
app.use(express.json()) // parse body of data into json object

// create routes
app.use("/animes", animesController)

app.get('/',(req, res)=>{
  // console.log(req)
  res.send('Welcome to Animania!')
}) // ()=>{} anonymous function is middleware

app.get("*", (req, res)=>{ //catach for request that don't matchany routes
  res.status(404).send("the resource you're looking for does not exist")
})

module.exports = app;
