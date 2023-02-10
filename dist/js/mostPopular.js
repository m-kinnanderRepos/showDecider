function displayMostPopular() {
    fetch("")
    .then((response) => response.json())
    .then((response) => {      
      createTableMostPopularFile(response)
    })
  }




function createTableMostPopularFile(mostPopularInfo) {    
    var grid = document.createElement('div')
    grid.className='grid'

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
    document.getElementById('displayMostPopularTable').after(grid);
  }
