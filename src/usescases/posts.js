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

function getPosts(){
    return Post.find()
}

function getPostById(idPost){
    return Post.findById(idPost)
}

function deletePost(idPost){
    return Post.remove({_id: idPost});
}

function editPost(idPost, body){
    return Post.update({_id: idPost}, body);
}

module.exports =  {
    create,
    getPosts,
    deletePost,
    editPost,
    getPostById
}