
document.getElementById("grid").style.visibility = "hidden"
document.getElementById("banner").style.visibility = "hidden"


// To make the grid and banner appear: 
const button1 = document.getElementById('btn1');
const gridd = document.getElementById("grid")
const bannerr = document.getElementById
("banner")
const homeimage = document.getElementById("home_image")
const homeform = document.getElementById("homeform")
const logo = document.getElementById('logo')

button1.addEventListener('click', () => {
  gridd.style.visibility = "visible"
  bannerr.style.visibility = "visible"
  homeimage.style.visibility = "hidden"
  homeform.style.visibility = "visible"
  homeform.style.position= 'absolute';
  homeform.style.left= "200px";
  homeform.style.top = "50px";
  logo.style.position = 'fixed';
  logo.style.left = "0px"
  logo.style.top = "0px"


})



// To make search results come up:

function renderSearch(wordd){
    const title11 = wordd.title1;
    const titleone = document.getElementById('title1');
    titleone.textContent = title11;
    
    const url11 = wordd.url1;
    const urlone = document.getElementById('url1');
    urlone.textContent = url11;
    const description11 = wordd.description1;
    const descriptionone = document.getElementById('description1');
    descriptionone.textContent = description11;
    
    const title22 = wordd.title2;
    const titletwo = document.getElementById('title2')
    titletwo.textContent = title22
    const url22 = wordd.url2;
    const urltwo = document.getElementById('url2')
    urltwo.textContent = url22
    const description22 = wordd.description2;
    const descriptiontwo = document.getElementById('description2')
    descriptiontwo.textContent = description22
    
    const title33 = wordd.title3;
    const titlethree = document.getElementById('title3')
    titlethree.textContent = title33
    const url33 = wordd.url3;
    const urlthree = document.getElementById('url3')
    urlthree.textContent = url33
    const description33 = wordd.description3;
    const descriptionthree = document.getElementById('description3')
    descriptionthree.textContent = description33
    
    const title44 = wordd.title4;
    const titlefour = document.getElementById('title4')
    titlefour.textContent = title44
    const url44 = wordd.url4;
    const urlfour = document.getElementById('url4')
    urlfour.textContent = url44
    const description44 = wordd.description4;
    const descriptionfour = document.getElementById('description4')
    descriptionfour.textContent = description44

    const title55 = wordd.title5;
    const titlefive = document.getElementById('title5')
    titlefive.textContent = title55
    const url55 = wordd.url5;
    const urlfive = document.getElementById('url5')
    urlfive.textContent = url55
    const description55 = wordd.description5;
    const descriptionfive = document.getElementById('description5')
    descriptionfive.textContent = description55

    const title66 = wordd.title6;
    const titlesix = document.getElementById('title6')
    titlesix.textContent = title66
    const url66 = wordd.url6;
    const urlsix = document.getElementById('url6')
    urlsix.textContent = url66
    const description66 = wordd.description6;
    const descriptionsix = document.getElementById('description6')
    descriptionsix.textContent = description66

    const title77 = wordd.title7;
    const titleseven = document.getElementById('title7')
    titleseven.textContent = title77
    const url77 = wordd.url7;
    const urlseven = document.getElementById('url7')
    urlseven.textContent = url77
    const description77 = wordd.description7;
    const descriptionseven = document.getElementById('description7')
    descriptionseven.textContent = description77

    const title88 = wordd.title8;
    const titleeight = document.getElementById('title8')
    titleeight.textContent = title88
    const url88 = wordd.url8;
    const urleight = document.getElementById('url8')
    urleight.textContent = url88
    const description88 = wordd.description8;
    const descriptioneight = document.getElementById('description8')
    descriptioneight.textContent = description88

    const title99 = wordd.title9;
    const titlenine = document.getElementById('title9')
    titlenine.textContent = title99
    const url99 = wordd.url9;
    const urlnine = document.getElementById('url9')
    urlnine.textContent = url99
    const description99 = wordd.description9;
    const descriptionnine = document.getElementById('description9')
    descriptionnine.textContent = description99

    const title1010 = wordd.title10;
    const titleten = document.getElementById('title10')
    titleten.textContent = title1010
    const url1010 = wordd.url10;
    const urlten = document.getElementById('url10')
    urlten.textContent = url1010
    const description1010 = wordd.description10;
    const descriptionten = document.getElementById('description10')
    descriptionten.textContent = description1010
  }

  function clearForm(){
    const form = document.querySelector('form');
    form.reset();
}
  
  function getData(searchword){
    fetch(`http://localhost:3000/${searchword}`)
      .then(resp => resp.json())
      .then(renderSearch)
  }
  
  
  function submitHandler(e) {
    e.preventDefault()
    let searchwordd = e.target['first-search'].value.toLowerCase()
    getData(searchwordd)
    clearForm()
  }
  
  function init(){
    const myform = document.querySelector('form')
    myform.addEventListener('submit', submitHandler)
    console.log('it worked')
  }
  
  init()
  







