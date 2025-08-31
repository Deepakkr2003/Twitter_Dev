// models/comment.js
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
    },
}, { timestamps: true });

// Change 'comment' to 'Comment' to match the name you're using elsewhere
const Comment = mongoose.model('comment', commentSchema);
module.exports = Comment;