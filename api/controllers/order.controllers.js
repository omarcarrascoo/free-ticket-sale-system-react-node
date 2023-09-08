const { placeNewOrder, placeNewTickets, getOrders } = require("../services/order.service")
const { getUserById } = require("./user.controlles")


const placeOrder = async (req, res) => {
    try {
        const newOrder = await placeNewOrder(req.body)
        console.log(newOrder);
        const newTickets = await placeNewTickets(req.body, newOrder._id)
        const mergeOrder = [newOrder, newTickets]
        res.status(200).json(mergeOrder)
    } catch (error) {
        console.log(error)
        res.status(500).json("Hubo un error al crear su orden, vuelva a intentarlo.")
    }
}
const getUserOrders = async (req, res) => {
    try {
        const allOrders = await getOrders(req.body)
        const user = await getUserById(req.params.id)
        const userOrders = allOrders.filter(order => order.orderMail === user.email)
        res.status(200).json(userOrders)
    } catch (error) {
        console.log(error)
        res.status(500).json("Hubo un error al crear su orden, vuelva a intentarlo.")
    }
}


module.exports ={
    placeOrder,
    getUserOrders
}