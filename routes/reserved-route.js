const express = require('express')
const router = express.Router()
const reservedController = require('../controllers/reserved-controller')

router.get("/show", reservedController.showRerved)
router.post("/creacte", reservedController.creacteRerved)
router.delete("/delete/:reservedId", reservedController.deleteRerved)

module.exports = router