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

module.exports =  {
    create
}