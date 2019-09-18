const express = require('express')
const user = require('../usescases/users')
const router = express.Router()

router.get('/', async (req, res) => {
    try{
        const getUsers = await user.getAll()
        res.json({
            message: 'Users on bd',
            data: {
                users: getUsers
            }
        })
    }
    catch(error){
        res.json({
            success: false,
            message: 'Something went wrong',
            error: error.message
        })
    }
})

router.delete('/:id', async (req, res) => {
    try{
        const { id } = req.params
        const deleteUser = await user.deleteById(id)
        res.json({
            message:  `Post ${id} deleted`,
            data: {
                user: deleteUser
            }
        })
    }
    catch(error){
        res.json({
            success: false,
            message: 'Something went wrong',
            error: error.message
        })
    }
})

router.post('/', async (req, res) => {
    try{
        const {
            userName,
            email,
            password
        } = req.body
        const newUser = await user.create({
            userName,
            email,
            password
        })
        res.json({
            success: true,
            message: 'User created',
            data: {
                user: newUser
            }
        })
    }
    catch(error){
        res.json({
            success: false,
            message: 'Something went wrong',
            error: error.message
        })
    }
})

module.exports = router