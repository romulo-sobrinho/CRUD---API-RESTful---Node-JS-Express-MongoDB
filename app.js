const express = require('express')
const app = express()
const PORT = 3000
const bodyParser = require('body-parser')
const dogRoutes = require('./routes/dogRoutes')
const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/pets')
.then( () => {
  console.log('Banco de dados conectado com sucesso')
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
})
.catch(error => {
  console.log('Houve um erro ao conectar ao banco de dados')
})

app.use(bodyParser.json()) //para receber body
app.use(express.urlencoded({ extended: false })) //para receber params
app.use("/dog", dogRoutes)