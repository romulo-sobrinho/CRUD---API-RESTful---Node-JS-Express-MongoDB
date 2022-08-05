const express = require('express')
const router = express.Router()
const dogsControllers = require('../controllers/dogControllers')


router.get("/", dogsControllers.showDogs)

router.get("/:breed", dogsControllers.showSpecificDog)

router.post("/", dogsControllers.addDog)

router.patch("/:breed", dogsControllers.updateDog)

router.delete("/:id", dogsControllers.deleteDog)

module.exports = router
















// router.put("/", bodyParser.json(), dogsControllers.updateDog)

