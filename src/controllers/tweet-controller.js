import TweetService from "../services/tweet-service.js";

const tweetService = new TweetService();

export const createTweet = async (req,res)=>{
    try {
        const response = await tweetService.create(req.body);
        return res.status(201).json({
            success: true,
            message: 'Successfully created a new tweet',
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