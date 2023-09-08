const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
    {
        eventName: {type: String, required: true},
        eventBanner: {type: String, required: true},
        eventDirection: {type: String, required: true},
        eventTime: {type: String},
        eventDescription: {type: String},
        eventPrice: {type: Number, required: true},
        eventMaxTickets: {type: Number, default: 10000},
        eventStatus: {
            type: Boolean,
            default: true,
        },
    },
    {timestamps: true}
);
module.exports = mongoose.model("Event", EventSchema);