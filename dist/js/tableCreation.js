export function createTable(headerList, rowDataList, innerTable){
    let table = `
      <table class="table table-striped" id="${innerTable}">
        <thead>
          <tr>`
    for(let i = 0; i < headerList.length; i++){
      table = table + 
        `
        <th scope="col">${headerList[i]}</th>
        `
    }
    table = table +
      `</tr>
      </thead>
      <tbody>
      `
    for(let j = 0; j < rowDataList.length; j++){
      table = table + `<tr>`
      for(let k = 0; k < rowDataList[j].length; k++){
        table = table + 
          `<th scope="row">${rowDataList[j][k]}</th>`
      }
      table = table + `</tr>`
    }
  
    //close off table
    table = table +
      `</tbody>
      </table>`
  
    return table
}

export function createTableWithEpisode(episodeInfo) {
    let oldTable = document.getElementById("myTable")
    if(oldTable) oldTable.parentNode.removeChild(oldTable)
  
    let tableDataDiv = document.getElementById("episodeTable");
  
    const headerList = ['Title', 'Season', 'Episode']
    const rowData = [[episodeInfo['name'], episodeInfo['season'], episodeInfo['episode']]]
    const table = createTable(headerList, rowData, "myTable")
  
    tableDataDiv.innerHTML = table;
  }

export function createTableMostPopular(mostPopularInfo) {
  let oldTable = document.getElementById("innerPopularTable")
  if(oldTable) oldTable.parentNode.removeChild(oldTable)

  let tableDataDiv = document.getElementById("displayMostPopularTable");

  const headerList = ['Name', 'PermaLink', 'ImageURL']
  const rowData = []

  // const total = mostPopularInfo['tv_shows'][0]['name']
  // console.log(`the name of first tv show is ${total} \n`)

  for (let i = 0; i < mostPopularInfo['tv_shows'].length; i++) {
    rowData.push([mostPopularInfo['tv_shows'][i]['name'], mostPopularInfo['tv_shows'][i]['permalink'], mostPopularInfo['tv_shows'][i]['image_thumbnail_path']])
  }

  const table = createTable(headerList, rowData, "innerPopularTable")
  tableDataDiv.innerHTML = table;
}

export function createErrorTable() {
  let oldTable = document.getElementById("myTable")
  if(oldTable) oldTable.parentNode.removeChild(oldTable)

  let tableDataDiv = document.getElementById("episodeTable");

  const headerList = ['', 'Show Data Not Found']
  const rowData = [['1', 'Try adding `the` to title and search again.'],
                  ['2', 'Try removing `the` from title and search again.'],
                  ['3', 'Make sure there are spaces between words and search again.'],
                  ['4', 'Data for this show may not exist.']]
  const table = createTable(headerList, rowData, "myTable")

  tableDataDiv.innerHTML = table;
}

export function createUnknownDataTable() {
  let oldTable = document.getElementById("myTable")
  if(oldTable) oldTable.parentNode.removeChild(oldTable)

  let tableDataDiv = document.getElementById("episodeTable");

  const headerList = ['', 'Error with Show Data']
  const rowData = [['1', 'The show was found and data returned, but it doesn\'t have the expected formate.']]
  const table = createTable(headerList, rowData, "myTable")

  tableDataDiv.innerHTML = table;
}