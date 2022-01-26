const express = require('express')
const app = express()
const cors = require('cors');

app.use(express.json());
app.use(cors());


horse = [ {title1: 'Jean AOT', url1: 'https://www.reddit.com/r/ShingekiNoKyojin/comments/636xx1/whats_the_joke_about_jean_and_horses/', description1: 'jean is horseface hahahahahahahahahahahahahahahahahahahahahahahahhaahahahahaha'}, {title2: 'Purple Horse', url2: 'https://www.redbubble.com/i/poster/Purple-Horse-Cartoon-by-Graphxpro/11808530.LVTDI', description2: 'purple horse poster hahahahahahahahahahahahahahahahahahahahahahahahhaahahahahaha'} ] 

app.get('/', (req, res) => res.send('Jumanaah is awesome!'))

app.get("/horse", (req, res) => {
    res.json(horse);
  });




module.exports = app;
