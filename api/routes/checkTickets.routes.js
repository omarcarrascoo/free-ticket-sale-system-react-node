const router = require("express").Router()
const {verifyToken, verifyTokenAdmin } = require("../auth/verifyToken")

const {getTicketByIdAndSet} = require("../controllers/ticket.controllers")

router.get("/:id", verifyTokenAdmin, getTicketByIdAndSet)

module.exports = router;