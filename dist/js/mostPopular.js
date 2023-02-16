export function createMostPopularGrid(mostPopularInfo) {
  let list_items = ``
  if (typeof mostPopularInfo != "undefined"){
    for(let i = 0; i < mostPopularInfo['tv_shows'].length; i++){
      list_items = list_items + `<div class="list-item">`
      list_items = list_items + `<div class="name"><p>${mostPopularInfo['tv_shows'][i]['name']}</p></div>`
      list_items = list_items + `<div class="image" style="background-image: url(&quot;${mostPopularInfo['tv_shows'][i]['image_thumbnail_path']}&quot;);">`
      list_items = list_items + `</div></div>`
    }
  
  }
  
  return list_items
}

export function attachGridAfterElementById(list_items, elementId) {
  var grid = document.createElement('div')
  grid.className='grid'
  grid.innerHTML = list_items
  document.getElementById(elementId).after(grid);
}



// I don't want to spend the time to get document call working in spec file
// I do like this function more though.

export function createMostPopularGridByDocument(mostPopularInfo) {    
    var grid = document.createElement('div')
    grid.className='grid'

    if (typeof mostPopularInfo != "undefined"){
      for(let i = 0; i < mostPopularInfo['tv_shows'].length; i++){
        var paragraphName = document.createElement("p");
        var node = document.createTextNode(mostPopularInfo['tv_shows'][i]['name']);
        paragraphName.appendChild(node);

        var divName = document.createElement('div')
        divName.className='name'
        divName.appendChild(paragraphName)

        var divImage = document.createElement('div')
        divImage.className='image'
        divImage.style=`background-image: url(${mostPopularInfo['tv_shows'][i]['image_thumbnail_path']});`
        
        var divItem = document.createElement('div')
        divItem.className='list-item'
        divItem.appendChild(divName)
        divItem.appendChild(divImage)
        
        grid.append(divItem)
      }
    }

    return grid
  }

export function attachFullGridAfterElementByIdYo(grid, elementId) {
  document.getElementById(elementId).after(grid);
}
