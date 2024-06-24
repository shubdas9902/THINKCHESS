import mongoose from "mongoose"

const commentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'communityPost',
    required: true
  },
   senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model
    required: true
  }

},{timestamps:true});

const commentPost= mongoose.model("Comments",commentSchema)

export default commentPost;