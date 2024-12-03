const express = require('express');

const animes = express.Router();
const animesArr = require('../data/animes') 

// get all route
animes.get('/', (req, res)=>{
  // console.log(animesArr)
  res.status(200).json(animesArr)
})

// get one anime  GET
animes.get("/:id",(req, res)=>{
  try {
    console.log(req.params)
    // NB: remember that the params are type string
    // to compare to number in database strings must be coverted
    // const id = req.params.id
    const {id} = req.params
                                      // convert id param to number
    const anime = animesArr.find(anime => anime.id === Number(id))
    
    if(anime){
      res.status(200).json(anime)
    } else {
      throw "anime could not be found!"
    }
  } catch (error) {
    res.status(404).json({error: error})
  }
  
})
// create new anime POST
animes.post('/',(req,res)=>{
  try {
    const anime = req.body;
    anime.id = animes.length + 1
    if (anime.name && anime.description){
      animesArr.push(anime)
      res.status(201).json(animesArr[animesArr.length -1])

    } else{
      throw "could not create anime. Please provide data."
    }
  } catch (error) {
    res.status(400).json({error: error})
  }
})
// update an anime PUT

// delete an anime DELETE
animes.delete("/:id", (req, res)=>{
  try {
    const { id } = req.params;
    const index = animesArr.findIndex((anime)=> anime.id === Number(id))
    if(index !== -1){
      animesArr.splice(index,1);
      res.status(200).json(animesArr)
    } else {
      throw "could not find anime!!"
    }
  } catch (error) {
    res.status(404).json({error: error})
    
  }
})

// update one anime
animes.put('/:id',(req,res)=>{
try {
  const {id} = req.params; 
  const anime = req.body;
  const index = animesArr.findIndex((anime) => Number(id) === anime.id)
  if(index !== -1){
    animesArr.splice(index, 1, anime)
    res.status(201).json(animesArr);
  } else {
    throw "could not update anime"
  }
} catch (error) {
  res.status(400).json({error: error})
}
})


module.exports = animes;