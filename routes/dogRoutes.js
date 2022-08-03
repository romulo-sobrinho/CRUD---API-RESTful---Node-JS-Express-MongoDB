const express = require('express')
const router = express.Router()
const dogsControllers = require('../controllers/dogControllers')


router.get("/", dogsControllers.showDogs)

router.get("/:breed", dogsControllers.showSpecificDog)

router.post("/", dogsControllers.addDog)

router.patch("/:breed", dogsControllers.updateDog)

module.exports = router
















// router.put("/", bodyParser.json(), dogsControllers.updateDog)

// router.delete("/", bodyParser.json(), dogsControllers.deleteDog)
