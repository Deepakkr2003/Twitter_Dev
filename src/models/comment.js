// models/comment.js
import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    onModel:{
        type:String,
        required:true,
        enum:['Tweet','Comment']
    },
    commentable:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        refPath:'onModel',
    }
}, { timestamps: true });

// Change 'comment' to 'Comment' to match the name you're using elsewhere
const Comment = mongoose.model('comment', commentSchema);
export default Comment;