const express = require('express')
const router = express.Router()
const reservedController = require('../controllers/reserved-controller')
const authenticate = require('../middlewares/authenticate')

router.get("/show", authenticate, reservedController.showRerved)
router.get("/adminShow", authenticate, reservedController.adminShowRerved)
router.post("/creacte",authenticate, reservedController.creacteRerved)
router.delete("/delete/:reservedId", reservedController.deleteRerved)

module.exports = router