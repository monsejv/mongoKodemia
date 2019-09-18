const User = require('../models/users')

function create ({userName, email, password}){
    const newUser = new User({
        userName,
        email,
        password
    })
    return newUser.save()
}

function getAll(){
    return User.find()
}

function getById(idUser){
    return User.findById(idUser)
}

function deleteById(idUser){
    return User.findByIdAndDelete(idUser)
}

module.exports =  {
    create,
    getAll,
    deleteById,
    getById
}