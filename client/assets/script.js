

function renderSearch(wordd){
    const title11 = wordd.title1;
    const titleone = document.getElementById('title1')
    titleone.textContent = title11
    const url11 = wordd.url1;
    const urlone = document.getElementById('url1')
    urlone.textContent = url11
    const description11 = wordd.description1;
    const descriptionone = document.getElementById('description1')
    descriptionone.textContent = description11
    const title22 = wordd.title2;
    const titletwo = document.getElementById('title2')
    titletwo.textContent = title22
    const url22 = wordd.url2;
    const urltwo = document.getElementById('url2')
    urltwo.textContent = url22
    const description22 = wordd.description2;
    const descriptiontwo = document.getElementById('description2')
    descriptiontwo.textContent = description22
  }
  
  function getData(searchword){
    fetch(`http://localhost:3000/${searchword}`)
      .then(resp => resp.json())
      .then(renderSearch)
  }
  
  
  function submitHandler(e) {
    e.preventDefault()
    let searchwordd = e.target['first-search'].value 
    getData(searchwordd)
  }
  
  function init(){
    const myform = document.querySelector('form')
    myform.addEventListener('submit', submitHandler)
    console.log('it worked')
  }
  
  init()
  