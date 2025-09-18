import CommentService from "../services/comment-service.js";

const commentService = new CommentService();

export const createComment = async (req,res)=>{
    try {
        const response = await commentService.create(req.query.modelId,req.query.modelType,req.body.userId,req.body.content);
        return res.status(201).json({
            success: true,
            message: 'Successfully created a new comment',
            data: response,
            err: {}
        });
    } catch (error) {
        // 🚨 IMPORTANT: Log the full error for server-side debugging
        console.error(error); 
        
        // ✅ Safely handle the error and send a clean message to the client
        return res.status(400).json({
            success: false,
            message: 'Something went wrong.',
            data: {},
            err: {
                message: error.message, // Send a safe, specific message
                stack: process.env.NODE_ENV === 'development' ? error.stack : {} // Optional: send stack in dev mode
            }
        });
    }
}