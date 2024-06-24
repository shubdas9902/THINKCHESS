import mongoose from "mongoose"

const communityPostSchema= new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    title: {
        type: String,
        required: true
      },
    message:{
        type:String,
        required:true
    }
},{timestamps:true})

const communityPost= mongoose.model("Communitypost",communityPostSchema)

export default communityPost;