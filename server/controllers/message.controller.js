import Conversation from '../models/conversation.model.js';
import Message from '../models/message.model.js';
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';

dotenv.config()

// const API_KEY = process.env.API_KEY;

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const sendMessage = async (req, res) => {
    const userId = req.user._id;
    const { text } = req.body;

    try {
        // Find or create a conversation for the user
        let conversation = await Conversation.findOne({ userId });

        if (!conversation) {
            conversation = new Conversation({ userId });
            await conversation.save();
        }

        // Create a new message with the user's input
        const userMessage = new Message({
            conversationId: conversation._id,
            sender: 'user',
            text,
        });
        await userMessage.save();

        // Call Gemini API to get a response
        const result = await model.generateContent(text);
        if (!result) console.log("error in model response")
        const botResponse = result.response.text();

        // Create a new message with the bot's response
        const botMessage = new Message({
            conversationId: conversation._id,
            sender: 'bot',
            text: botResponse,
        });
        await botMessage.save();

        // Add messages to the conversation
        conversation.messages.push(userMessage._id, botMessage._id);
        await conversation.save();

        res.status(200).json({ userMessage, botMessage });

    } catch (error) {
       
        console.error('Error in sendMessage:', error);
        res.status(500).json({ error: 'An error occurred while processing the request.' });
    }
};

export const getAllMessage = async (req, res) => {
    const userId = req.user._id;


    try {
        // Find the conversation for the user
        const conversation = await Conversation.findOne({ userId }).populate('messages');

        if (!conversation) {
            return res.status(404).json({ error: 'Conversation not found' });
        }

        res.status(200).json(conversation);

    } catch (error) {
        console.error('Error in getAllMessage:', error);
        res.status(500).json({ error: 'An error occurred while fetching the messages.' });
    }
};