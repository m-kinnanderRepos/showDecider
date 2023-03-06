/*!
* Start Bootstrap - Scrolling Nav v5.0.5 (https://startbootstrap.com/template/scrolling-nav)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-scrolling-nav/blob/master/LICENSE)
*/
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
  
  fetch("https://www.episodate.com/api/show-details?q=" + newName)
    .then((response) => response.json())
    .then((response) => {
      var episodeInfo = getEpisode(response)
      if (episodeInfo === undefined || episodeInfo.length == 0){
        createErrorTable()
      }
      else if (("name" in episodeInfo) && ("season" in episodeInfo) && ("episode" in episodeInfo)){
        createTableWithEpisode(episodeInfo)
      }
      else createUnknownDataTable()
      
    })
    .catch((err) => console.error(err));
}

export function displayMostPopular() {
  fetch("https://7bl3r3p3r5ffk7fns4pumdwllu0gbrcu.lambda-url.us-east-2.on.aws/")
  .then((response) => response.json())
  .then((response) => {    
    var grid = createMostPopularGrid(response)
    attachGridAfterElementById(grid, 'displayMostPopularTable')
  })
}
