const Post = require('../models/posts')

function create ({title, date, readTime, description, author, image}){
    const newPost = new Post({
        title,
        date,
        readTime,
        description,
        author,
        image
    })
    return newPost.save()
}

function getAll(){
    return Post.find()
}

function getById(idPost){
    return Post.findById(idPost)
}

function deleteById(idPost){
    return Post.findByIdAndDelete(idPost)
}

function updateById(idPost, postData){
    return Post.findByIdAndUpdate(idPost, postData);
}

module.exports =  {
    create,
    getAll,
    deleteById,
    updateById,
    getById
}