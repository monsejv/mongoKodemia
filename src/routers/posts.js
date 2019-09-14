const express = require('express')
const post = require('../usescases/posts')
const router = express.Router()

router.get('/', async (req, res) => {
    const getPost = await post.getPosts()
    res.json({
        message: 'Posts added',
        data: {
            post: getPost
        }
    })
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    await post.deletePost(id)
    const getPost = await post.getPosts()
    res.json({
        message:  `Post deleted in id ${id}`,
        data: {
            post: getPost
        }
    })
})

router.patch('/:id', async (req, res) => {
    const {id} = req.params
    await post.editPost(id, req.body)
    const getPost = await post.getPostById(id)
    res.json({
        message:  `Post edited in id ${id}`,
        data: {
            post: getPost
        }
    })
})

router.post('/', async (req, res) => {
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

})

module.exports = router