const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const dogsControllers = require('../controllers/dogControllers')

router.post("/", bodyParser.json(), dogsControllers.addDog)

module.exports = router



// router.get("/", dogsControllers.showDogs)


// router.put("/", bodyParser.json(), dogsControllers.updateDog)

// router.delete("/", bodyParser.json(), dogsControllers.deleteDog)
