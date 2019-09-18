const express = require('express')
const post = require('../usescases/posts')
const router = express.Router()

router.get('/', async (req, res) => {
    try{
        const getPosts = await post.getAll()
        res.json({
            message: 'Posts added',
            data: {
                posts: getPosts
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
        await post.deleteById(id)
        const getPost = await post.getAll()
        res.json({
            message:  `Post ${id} deleted`,
            data: {
                post: getPost
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

router.patch('/:id', async (req, res) => {
    try{
        const {id} = req.params
        await post.updateById(id, req.body)
        const getPost = await post.getById(id)
        res.json({
            message:  `Post edited in id ${id}`,
            data: {
                post: getPost
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
            title,
            description,
            author,
            date,
            readTime,
            image
        } = req.body
        const newPost = await post.create({
            title,
            description,
            author,
            date,
            readTime,
            image
        })
        res.json({
            success: true,
            message: 'post created',
            data: {
                post: newPost
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