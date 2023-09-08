const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema(
    {
        orderMail: {type: String, required: true},
        orderId: {type: String,},
        // ticketNumber: {type: Number, required: true, unique: true},
        orderEventId: {type: String, required: true},
        ticketAssistant: {type: String, default: null},
        ticketStatus: {
            type: Boolean,
            default: false,
        },
    },
    {timestamps: true}
);
module.exports = mongoose.model("Ticket", TicketSchema);