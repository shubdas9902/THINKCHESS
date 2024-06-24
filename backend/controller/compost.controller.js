import communityPost from "../models/communitypost.model.js"


export const sendPost = async(req,res) => {
  try {
    const {post,title}=req.body
     const senderId=req.user._id

     const posting= new communityPost({
        senderId,
        title,
        message:post
     })
       await posting.save()
            res.status(201).json({
                _id:posting._id,
                senderId:posting.senderId,
                title:posting.title,
                message:posting.message

            })
        

  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" })
  }
}

export const getPost=async(req,res)=>{
  try {
    const posts = await communityPost.find().populate('senderId','username'); // Populate author details
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export const getUserPost= async(req,res)=>{
  try {
    const postId = req.user._id
  
    const post = await communityPost.find({senderId:postId}).populate('senderId', 'username'); // Populate author details
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
