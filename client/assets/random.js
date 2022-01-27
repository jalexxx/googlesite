/* Does not work :(

function getRandomResult(){
    fetch(`http://localhost:3000/random/`)
        .then(resp=>resp.json())
        .then(resp=> resp.url)
        .then(resp => window.open(resp, '_blank')) 
}




function submitHandlerr(e) {
    e.preventDefault()
    getRandomResult()
  }
  
  function initt(){
    const myformm = document.getElementById("randombtn1")
    myformm.addEventListener('submit', submitHandlerr)
    console.log('it workedddd')
  }
  
  initt()


*/

let randomlinks = [ 'https://www.reddit.com/r/ShingekiNoKyojin/comments/636xx1/whats_the_joke_about_jean_and_horses/',  'https://www.redbubble.com/i/poster/Purple-Horse-Cartoon-by-Graphxpro/11808530.LVTDI',  'https://www.quora.com/Do-you-think-Eren-is-doing-the-right-thing',  'https://www.redbubble.com/i/poster/Purple-Horse-Cartoon-by-Graphxpro/11808530.LVTDI',  'https://attackontitan.fandom.com/wiki/Armin_Arlert', 'https://en.wikipedia.org/wiki/History_of_Germany', 'https://www.bbcgoodfood.com/recipes/crisp-baked-potatoes', 'https://www.highspeedtraining.co.uk/hub/what-are-the-six-stages-of-cleaning/', 'https://www.ancestry.co.uk/', 'https://www.theguardian.com/film/2022/jan/25/fight-club-gets-a-new-ending-in-china-and-the-authorities-win', 'https://www.noblechairs.co.uk/', 'https://www.pinterest.co.uk/lovergirl678/weird-chairs/', 'https://chairinstitute.com/facts-about-chairs/.', 'https://www.maisonsdumonde.com/UK/en/p/green-dinosaur-chair-193853.', 'https://en.wikipedia.org/wiki/Chair', 'https://www.calibre-furniture.co.uk/blog/fun-chair-facts', 'https://www.udesign.es/the-top-7-craziest-chairs-in-the-world/'  ]

function randomlink(){
    window.open(randomlinks[Math.floor(Math.random()*randomlinks.length)]);
  }


  