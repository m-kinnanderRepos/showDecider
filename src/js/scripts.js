//
// Scripts
//
import {getEpisode} from '/js/getEpisodeFromJSON.js'
import {createTableWithEpisode, createErrorTable, createUnknownDataTable} from '/js/tableCreation.js'
import {createMostPopularGrid, attachGridAfterElementById} from '/js/mostPopular.js'

window.addEventListener("DOMContentLoaded", (event) => {
  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});



const searchButton = document.getElementById("pickEpisodeButton");
const searchInput = document.getElementById('searchInput')

searchButton.addEventListener('click', event => {
  getShow(document.getElementById("searchInput").value);
});

document.body.addEventListener( 'click', function ( event ) {
  if( event.target.id == 'mostpop' ) {
    searchInput.value=event.target.getAttribute("permalink")
    searchInput.scrollIntoView()
    searchButton.click()
  }
  else if (event.target.id == 'autoCompleteText'){
    searchInput.value=event.target.getAttribute("permalink")
    searchInput.scrollIntoView()
    searchButton.click()
  }
} );

function getShow(nameOfShow) {
  var newName = nameOfShow.replace(/ /g,"-")
  const show = localStorage.getItem(newName)

  if (show)
  {
    const expired = (new Date()).getTime() > JSON.parse(show).expDate
    if (expired){
      callShowApiAndSetData(newName)
    }
    else{
      setShowGrid(JSON.parse(show).data)
    }
  }
  else {
    callShowApiAndSetData(newName)
  }
  
  
}

function callShowApiAndSetData(showName){
  fetch("https://www.episodate.com/api/show-details?q=" + showName)
  .then((response) => response.json())
  .then((response) => {
    setShowGrid(response)
    const saveData = {'tvShow': {'episodes': response['tvShow']['episodes']}}
    cacheData(showName, saveData, 30)
    
  })
  .catch((err) => console.error(err));
}

function setShowGrid(data){
  var episodeInfo = getEpisode(data)
  if (episodeInfo === undefined || episodeInfo.length == 0){
    createErrorTable()
  }
  else if (("name" in episodeInfo) && ("season" in episodeInfo) && ("episode" in episodeInfo)){
    createTableWithEpisode(episodeInfo)
  }
  else createUnknownDataTable()
}

export function displayMostPopular() {
  const mostPopular = localStorage.getItem('most-popular')

  if (mostPopular)
  {
    const expired = (new Date()).getTime() > JSON.parse(mostPopular).expDate
    if (expired){
      callMostPopularAndSetData()
    }
    else{
      setMostPopularGrid(JSON.parse(mostPopular).data)
    }
  }
  else {
    callMostPopularAndSetData()
  }
  
}

function callMostPopularAndSetData(){
  fetch("https://7bl3r3p3r5ffk7fns4pumdwllu0gbrcu.lambda-url.us-east-2.on.aws/")
  .then((response) => response.json())
  .then((response) => {   
    setMostPopularGrid(response)
    cacheData('most-popular', response, 7)
  })
}

function setMostPopularGrid(data){
  var grid = createMostPopularGrid(data)
  attachGridAfterElementById(grid, 'displayMostPopularTable')
}

function cacheData(key, data, duration){
  const expDate = new Date().setDate(new Date().getDate() + duration)

  localStorage.setItem(key, JSON.stringify({
    data: data,
    expDate: expDate
  }))
}