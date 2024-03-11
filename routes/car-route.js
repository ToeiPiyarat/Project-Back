const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authenticate')
const carController = require('../controllers/car-controller')

router.get("/show",authenticate,carController.carvehicle)
router.post("/add", authenticate,carController.addcar)
router.delete("/delete/:vehiclenumberId", authenticate,carController.deletecar)

module.exports = router