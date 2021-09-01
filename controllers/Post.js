let express = require('express')
let router = express.Router()
const { Post } = require('../models/Post')

router.get("", (req, res) => {
    res.send("Hello from the posts route")
})

router.post("/create/:content", async (req, res) => {
    let message 
    try{
        let post = await Post.create({
            content: req.params.content
        })
        message = {
            msg: "Post made!",
            data: post
        }
    } catch(err){
        message = {
            msg: "Post Create Failed",
        }
        console.warn(err)
    }
    res.send(JSON.stringify(message))
})

module.exports = router