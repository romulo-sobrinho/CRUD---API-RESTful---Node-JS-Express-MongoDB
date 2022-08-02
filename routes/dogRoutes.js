const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const dogsControllers = require('../controllers/dogControllers')


router.get("/", dogsControllers.showDogs)

router.get("/:breed", dogsControllers.showSpecificDog)

router.post("/", bodyParser.json(), dogsControllers.addDog)

module.exports = router
















// router.put("/", bodyParser.json(), dogsControllers.updateDog)

// router.delete("/", bodyParser.json(), dogsControllers.deleteDog)
