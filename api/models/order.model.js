const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
    {
        orderMail: {type: String, required: true},
        orderEventId: {type: String, required: true},
        eventPriceOrder: {type: Number, required: true},
        ticketQuantityOrder: {type: Number, required: true},
        totalOrder: {type: Number, required: true},
        orderStatus: {
            type: Boolean,
            default: false,
        },
    },
    {timestamps: true}
);
module.exports = mongoose.model("Order", OrderSchema);