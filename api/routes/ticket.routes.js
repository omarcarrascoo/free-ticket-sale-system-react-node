const router = require("express").Router()
const {verifyToken, verifyTokenAdmin } = require("../auth/verifyToken")

const {getByOrderId, setTicketName, getTicketById, getAllTickets} = require("../controllers/ticket.controllers")

router.get("/byOrderId/:id", verifyToken, getByOrderId)
router.get("/:id", verifyToken, getTicketById)
router.get("/", verifyTokenAdmin, getAllTickets )
// //UPDATE
router.put("/:id", verifyToken, setTicketName)

module.exports = router;