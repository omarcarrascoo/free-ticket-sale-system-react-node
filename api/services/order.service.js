const Order = require("../models/order.model");
const Ticket = require("../models/ticket.model")

const placeNewOrder = async (data)=>{
    const newOrder = new Order(data);
    console.log("EL ID ANTES DE GUARDAR")
    console.log(newOrder);
    const savedOrder = await newOrder.save()
    return(savedOrder)
}

const placeNewTickets = async (data, orderNumber) =>{
    let ticketsCreated = [];
    const idAsString = orderNumber.id.toString('hex');
    console.log("Destructured orderId:", idAsString);
    const orderId ={
        orderMail: data.orderMail,
        orderEventId: data.orderEventId,
        orderId: idAsString
    }
    for (let index = 0; index < data.ticketQuantityOrder; index++) {
        const newTicket = new Ticket(orderId);  
        const saveTicket = await newTicket.save();
        ticketsCreated.push(saveTicket);
    }
    return(ticketsCreated);
}
const getOrders = async() =>{
    const orders = await Order.find()
    return (orders)
}

module.exports = {
    placeNewOrder,
    placeNewTickets,
    getOrders
}