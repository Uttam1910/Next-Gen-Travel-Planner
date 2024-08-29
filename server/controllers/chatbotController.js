const { OpenAI } = require('openai'); // Import OpenAI client
require('dotenv').config(); // Load environment variables

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Use the API key from your .env file
});

// Controller function to handle text-based queries
exports.handleTextQuery = async (req, res) => {
    const { query } = req.body; // Extract query from the request body

    try {
        // Call the OpenAI API to create a chat completion
        const response = await openai.chat.completions.create({
            model: "gpt-4", // Use the appropriate model
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                { role: "user", content: query }, // Pass the user's query
            ],
        });

        // Send the response back to the client
        res.status(200).json({
            message: response.choices[0].message.content.trim(),
        });
    } catch (error) {
        console.error('Error processing text query:', error.response ? error.response.data : error.message);
        res.status(500).json({ message: 'Server error while processing text query' });
    }
};
