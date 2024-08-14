# sukoonify

Sukoonify is a solution for Muslims looking for Islamic resources to manage daily situations and emotions with the goal of maintaning a peaceful state of mind. Sukoonify your life!

See [presentation](https://www.canva.com/design/DAGNhJBDFcQ/dLDxdHqEZtTo-upOYasf9w/view?utm_content=DAGNhJBDFcQ&utm_campaign=designshare&utm_medium=link&utm_source=editor) for more details on the idea behind Sukoonify and a demo.

## Instructions

1. Clone the repo.
2. Go into the server folder: `cd server`
3. Install dependencies: `npm install`.

Then, either run the web app or the script.

### Run Web App
To run the web app (from `sukoonify/server`):
1. Add a valid OpenAI API key in `index.js`.
2. Run `node index.js`.
3. Open the browser to view the webpage.

### Run Script

To run the server-side script (from `sukoonify/server`):
1. Add a valid OpenAI API key in `terminal-script.js`.
2. Run `node terminal-script.js`.

Example output of script:

```
How are you feeling? 

I am stressed because I've had a long day.
> 
Emotion: Stress

Islamic Content: 

1. Quranic Ayah: "And He found you lost and guided [you]." (Ad-Duha, 93:7) - This ayah reminds us that Allah guides us even in times of stress and difficulty.

2. Duaa: "O Allah, I seek refuge in You from worry and grief, and I seek refuge in You from incapacity and laziness, and I seek refuge in You from cowardice and miserliness, and I seek refuge in You from being heavily in debt and from being overpowered by other men." (Sahih Muslim) - This dua can help alleviate stress and worries by seeking refuge in Allah.

3. Hadith: The Prophet Muhammad (peace be upon him) said, "If a person says 'SubhanAllah' 100 times, a thousand good deeds are recorded for him and a thousand bad deeds are wiped away." (Sahih Muslim) - This hadith emphasizes the importance of remembering Allah and seeking His forgiveness, which can help reduce stress and anxiety.

4. Name of Allah: Al-Mujeeb (The Responder to Prayer) - This name of Allah reminds us that He is always there to listen to our prayers and alleviate our stress.

5. Story of the Sahabah: The patience and reliance on Allah shown by the Sahabah in times of stress and difficulty can serve as an inspiration for us to trust in Allah's plan
```