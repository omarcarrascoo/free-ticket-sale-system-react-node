const { placeNewTickets, placeNewOrder } = require("../services/order.service");

const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY)

router.post("/payment", async (req, res)=>{
    console.log("Si pega");
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "mxn",   
    },async(stripeErr, stripeRes)=>{
        if(stripeErr){
            console.log(stripeErr)
            res.status(500).json(stripeErr)
        }else{
            // const newOrder = await placeNewOrder(req.body)
            // const newTickets = await placeNewTickets(req.body)
            // const mergeOrder = [newOrder, newTickets]
            // console.log(mergeOrder);
            res.status(200).json(stripeRes)
        }
    })
})

module.exports = router;







// const { placeNewTickets, placeNewOrder } = require("../services/order.service");
// const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);

// router.post("/payment", async (req, res) => {
//     console.log("Si pega");
//     console.log(req.body);
//     try {
//         const paymentIntent = await stripe.paymentIntents.create({
//             amount: req.body.amount,
//             currency: "usd",
//             payment_method_types: ["card"],
//         });

//         const confirmPayment = await stripe.paymentIntents.confirm(paymentIntent.id, {
//             payment_method: req.body.tokenId,
//         });

//         const newOrder = await placeNewOrder(req.body);
//         const newTickets = await placeNewTickets(req.body);
//         const mergeOrder = [newOrder, newTickets];

//         console.log(mergeOrder);
//         res.status(200).json(confirmPayment);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "An error occurred while processing the payment." });
//     }
// });

// module.exports = router;
