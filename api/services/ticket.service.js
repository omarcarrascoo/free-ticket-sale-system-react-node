const Ticket = require("../models/ticket.model")

const searchTickets = async(id) =>{
    const tickets = await Ticket.find({orderId: id})
    return(tickets)
}
const updateTicket = async(id, data) =>{
    const updatedTicket = await Ticket.findByIdAndUpdate(id,{$set: data});
    return(updatedTicket)
}
const findTicket = async(id) =>{
    const ticket = await Ticket.findById(id)
    return(ticket)
}
const findTickets = async()=>{
    const tickets = await Ticket.find()
    return(tickets)
}
const findTicketAndUpdate = async(id) =>{
    const ticket = await Ticket.findByIdAndUpdate(id,{$set: {ticketStatus:true}})
    return(ticket)
}
module.exports ={
    searchTickets,
    updateTicket,
    findTicket,
    findTickets,
    findTicketAndUpdate
}