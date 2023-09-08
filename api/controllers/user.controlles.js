const User = require("../models/user.model")



const getUserById = (id) =>{
    const getUser = User.findById(id)
    return (getUser)
}

module.exports = {
    getUserById
}