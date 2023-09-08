const { verifyTokenAdmin } = require("../auth/verifyToken")
const Event = require("../models/event.model")
const router = require("express").Router()
const path = require("path")
const { verifyTokenAuthorization } = require("./verifyToken.routes")


//CREATE
router.post("/add", verifyTokenAdmin, async (req, res)=>{
        const newEvent = new Event(req.body);
        try {
            const savedEvent = await newEvent.save();
            res.status(200).json(savedEvent)
        } catch (error) {
            res.status(500).json(error)
        }  
})

// //UPDATE
// router.put("/:id", verifyTokenAuthorization, async (req, res)=>{
//     console.log(req.body);
//     console.log("minimo pega")
//     try {
//         const updatedCountry = await Country.findByIdAndUpdate(req.params.id,{$set: 
//             req.body
//         });
        
//         res.status(200).json(updatedCountry)
        
//     } catch (error) {
//         res.status(500).json("You can't update the country at this moment. Try again later. If the Error persist call Era Digital Solution")
//     }
// })

// //DELATE

router.delete("/:id", async (req, res) =>{
    try {
        const deleatedCountry = await Event.findByIdAndDelete(req.params.id)
        res.status(200).json(" deleated correctly!")
    }
    catch(error){
        res.status(500).json("Error deleating country, try again later or contact support.")
    }
})

//GET EVENT
router.get("/:id", async (req,res)=>{
    try {
        const event = await Event.findById(req.params.id)
        res.status(200).json(event);
    } catch (error) {
        console.log(error);
       res.status(500).json(error) 
    }
})
// router.get("/findByName/:country", async (req,res)=>{
//     try {
//         const country = await Country.find({urlCountry: req.params.country})
//         console.log("Paises encontrados con exito")
//         res.status(200).json(country);
//     } catch (error) {
//        res.status(500).json(error) 
//     }
// })
// GET ALL EVENTS
router.get("/", async (req,res)=>{
    try {
        const events = await Event.find()
        res.status(200).json(events);
    } catch (error) {
       res.status(500).json(error) 
    } 
})

module.exports = router;