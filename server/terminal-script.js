const readline = require('readline');
const axios = require('axios');
require('dotenv').config();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const promptUser = () => {
    rl.question('\nHow are you feeling? \n\n', async (input) => {
        await fetchContent(input);
        rl.close();
    });
};

const fetchContent = async (userInput) => {
    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: 'gpt-3.5-turbo', // Use 'gpt-4' if you prefer the GPT-4 model
            messages: [
                { role: 'user', content: `Determine the emotion from the following text: "${userInput}" and provide a corresponding content in an Islamic context (e.g., Hadith, Quranic ayahs, duaas, stories of the Sahabah, relevant names of Allah, etc.) for that emotion. It should list the resources out.` }
            ],
            max_tokens: 300,
            temperature: 0.7
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        const message = response.data.choices[0].message.content.trim();
        console.log(`\n${message}`);
    } catch (error) {
        console.error('Error fetching content:', error.response ? error.response.data : error.message);
    }
};

promptUser();
