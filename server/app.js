const express = require('express')
const app = express()
const cors = require('cors');

app.use(express.json());
app.use(cors());


let attack =  {title1: 'Jean AOT', url1: 'https://www.reddit.com/r/ShingekiNoKyojin/comments/636xx1/whats_the_joke_about_jean_and_horses/', description1: 'jean is horseface hahahahahahahahahahahahahahahahahahahahahahahahhaahahahahaha', title2: 'Purple Horse', url2: 'https://www.redbubble.com/i/poster/Purple-Horse-Cartoon-by-Graphxpro/11808530.LVTDI', description2: 'purple horse poster hahahahahahahahahahahahahahahahahahahahahahahahhaahahahahaha' , title3: 'Is Eren right', url1: 'https://www.quora.com/Do-you-think-Eren-is-doing-the-right-thing', description3: 'eren yeager valid or nah" ', title4: 'Grffiths vs eren ', url4: 'https://www.redbubble.com/i/poster/Purple-Horse-Cartoon-by-Graphxpro/11808530.LVTDI', description4: ' fight between idiots',  title5: 'armin smart', url5: 'https://attackontitan.fandom.com/wiki/Armin_Arlert', description5: 'armin ehehehe" ', title6: 'the context ', url6: 'https://en.wikipedia.org/wiki/History_of_Germany', description6: ' history', title7: 'recipe', url7: 'https://www.bbcgoodfood.com/recipes/crisp-baked-potatoes', description7: 'yum yummy" ', title8: 'how important is cleaning ', url8: 'https://www.highspeedtraining.co.uk/hub/what-are-the-six-stages-of-cleaning/', description8: 'cleaning', title9: 'how to know wither ur marylean or not ', url9: 'https://www.ancestry.co.uk/', description9: 'genes gesnes ', title10: 'fighting new ', url10: 'https://www.theguardian.com/film/2022/jan/25/fight-club-gets-a-new-ending-in-china-and-the-authorities-win', description10: 'bawowo' }


app.get('/', (req, res) => res.send('Jumanaah is awesome!'))

app.get("/attack", (req, res) => {
    res.json(attack);
  });


module.exports = app;
