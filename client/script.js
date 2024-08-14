const API_URL = 'https://api.openai.com/v1/chat/completions'; // Update to the latest endpoint
const API_KEY = ""; // Replace with your actual OpenAI API key

const submitFeeling = async () => {
    const userInput = document.getElementById('userInput').value;
    if (!userInput) {
        alert('Please enter your feeling.');
        return;
    }

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo', // Use 'gpt-4' if you prefer
                messages: [
                    { role: 'user', content: `Determine the emotion from the following text: "${userInput}" and provide a corresponding Islamic content (e.g., Hadith, Quranic ayah, duaa) for that emotion.` }
                ],
                max_tokens: 500,
                temperature: 0.7
            })
        });

        const data = await response.json();
        const message = data.choices[0].message.content.trim();
        displayResults(message);

    } catch (error) {
        console.error('Error fetching content:', error);
    }
};

const displayResults = (message) => {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Clear previous results

    // Example structure for the result boxes
    const emotions = ['Angry', 'Sad', 'Frustrating']; // Replace with dynamic content if needed

    emotions.forEach(emotion => {
        const card = document.createElement('div');
        card.className = 'ListItem'; // Add appropriate class for styling
        card.style = 'align-self: stretch; height: 120px; border-radius: 12px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: flex';
        card.innerHTML = `
            <div class="TextAndImage" style="align-self: stretch; justify-content: flex-start; align-items: flex-start; gap: 16px; display: inline-flex">
                <div class="Image" style="width: 120px; height: 120px; position: relative; background: linear-gradient(0deg, #FFA4A4 0%, #FFA4A4 100%); border-radius: 16px"></div>
                <div class="Content" style="flex: 1 1 0; align-self: stretch; flex-direction: column; justify-content: space-between; align-items: flex-start; display: inline-flex">
                    <div class="TitleDescription" style="align-self: stretch; height: 52px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 4px; display: flex">
                        <div class="Title" style="align-self: stretch; color: #566581; font-size: 22px; font-family: Roboto; font-weight: 400; line-height: 28px; word-wrap: break-word">${emotion}</div>
                        <div class="SecondaryText" style="align-self: stretch; color: #49454F; font-size: 14px; font-family: Roboto; font-weight: 400; line-height: 20px; letter-spacing: 0.25px; word-wrap: break-word">click to see more...</div>
                    </div>
                    <div class="LeadingTrailingIcons" style="align-self: stretch; justify-content: space-between; align-items: center; display: inline-flex">
                        <div class="Leading" style="flex: 1 1 0; height: 24px"></div>
                        <div class="Icon" style="width: 24px; height: 24px; padding-top: 5px; padding-bottom: 5px; padding-left: 8px; padding-right: 5px; justify-content: center; align-items: center; display: flex">
                            <div class="Icon" style="width: 11px; height: 14px; background: #1D1B20"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        resultsContainer.appendChild(card);
    });
};
