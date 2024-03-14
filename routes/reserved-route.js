const express = require('express')
const router = express.Router()
const reservedController = require('../controllers/reserved-controller')
const authenticate = require('../middlewares/authenticate')

router.get("/show", authenticate, reservedController.showRerved)
router.get("/adminShow", authenticate, reservedController.adminShowRerved)
router.post("/creacte",authenticate, reservedController.createReserved)
router.patch("/update",authenticate, reservedController.updateProfire)
router.delete("/delete/:reservedId", reservedController.deleteRerved)
router.patch("/updateReseved/:id",authenticate, reservedController.updatererved)

module.exports = router