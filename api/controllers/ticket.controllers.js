const { searchTickets, updateTicket, findTicket, findTickets, findTicketAndUpdate } = require("../services/ticket.service") ;


const getByOrderId = async (req,res) =>{
    const orderId = req.params.id
    try {
        const tickets = await searchTickets(orderId);
        res.status(200).json(tickets)
    } catch (error) {
        res.status(500).json("Hubo un error al obtener los tickets por order id")
    }
}

const setTicketName = async (req, res)=>{
    console.log(req.body);
    try {
        const updatedTicket = await updateTicket(req.params.id, req.body);
        res.status(200).json(updatedTicket)  
    } catch (error) {
        res.status(500).json("There is an error updating the ticket")
    }
}

const getTicketById = async (req, res) =>{
    try {
       const ticket = await findTicket(req.params.id) 
       res.status(200).json(ticket)
    } catch (error) {
        res.status(500).json("Error al obtener el ticket")
    }
}
const getAllTickets = async (req, res) =>{
    try {
        const tickets = await findTickets()
        res.status(200).json(tickets)
    } catch (error) {
        console.log(error)
        res.status(500).json("Error al obtener todos los tickets")
    }
}
const getTicketByIdAndSet = async (req, res) =>{
    console.log("Sipega")
    try {
       const ticket = await findTicketAndUpdate(req.params.id) 
       res.status(200).redirect("http://127.0.0.1:5174/panel/dashboard")
    } catch (error) {
        res.status(500).json("Error al obtener el ticket")
    }
}
module.exports ={
    getByOrderId,
    setTicketName,
    getTicketById,
    getAllTickets,
    getTicketByIdAndSet
}