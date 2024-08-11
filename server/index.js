require('dotenv').config();
const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "client" directory
app.use(express.static(path.join(__dirname, '../client')));

app.use(express.json());

// API route for handling emotion input
app.post('/api/emotion', async (req, res) => {
    const userInput = req.body.text;

    try {
        const response = await axios.post('https://api.openai.com/v1/completions', {
            model: 'text-davinci-003',
            prompt: `Determine the emotion from the following text: "${userInput}" and provide a corresponding Islamic content (e.g., Hadith, Quranic ayahs, duaas, stories of the Sahabah, links to lectures from scholars, relevant names of Allah, etc.) for that emotion.`,
            max_tokens: 100
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        const emotion = response.data.choices[0].text.trim().toLowerCase();
        const content = `Placeholder content for ${emotion}`; // Replace with actual content logic
        res.json({ emotion, content });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
});

// Handle all other routes by serving the index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
