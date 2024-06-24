import commentPost from "../models/comments.model.js"


export const sendComment = async(req,res) => {
   try {
    const {comment}= req.body
    const {id:postId}=req.params
    const senderId=req.user._id
    const comments= new commentPost({
        senderId,
        postId,
        comment
     })
       await comments.save()
            res.status(201).json({
                _id:comments._id,
                senderId:comments.senderId,
                postId:comments.postId,
                comment:comments.comment

            })


   } catch (error) {
    res.status(500).json({ error: "Internal Server Error" })
   }
}

export const getComment = async(req,res)=>{
    try {
        const {id:postId}=req.params
        console.log(postId)
        const post = await commentPost.find({postId}).populate('senderId', 'username'); // Populate author details
        if (!post) {
          return res.status(404).json({ message: 'Comments not found' });
        }
        res.json(post);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
}
