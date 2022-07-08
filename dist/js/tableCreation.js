export function createTable(headerList, rowDataList){
    let table = `
      <table class="table table-striped" id="myTable">
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
    const rowData = [[episodeInfo['title'], episodeInfo['season'], episodeInfo['number']]]
    const table = createTable(headerList, rowData)
  
    tableDataDiv.innerHTML = table;
  }
  
  export function createErrorTable() {
    let oldTable = document.getElementById("myTable")
    if(oldTable) oldTable.parentNode.removeChild(oldTable)
  
    let tableDataDiv = document.getElementById("episodeTable");
  
    const headerList = ['', 'Show Data Not Found']
    const rowData = [['1', 'Try searching again. Sometimes we need to think twice.'],
                    ['2', 'Try removing spaces from title and search again.'],
                    ['3', 'Data for this show may not exist.']]
    const table = createTable(headerList, rowData)
  
    tableDataDiv.innerHTML = table;
  }
  
  export function createUnknownDataTable() {
    let oldTable = document.getElementById("myTable")
    if(oldTable) oldTable.parentNode.removeChild(oldTable)
  
    let tableDataDiv = document.getElementById("episodeTable");
  
    const headerList = ['', 'Error with Show Data']
    const rowData = [['1', 'The show was found and data returned, but it doesn\'t have the expected formate.']]
    const table = createTable(headerList, rowData)
  
    tableDataDiv.innerHTML = table;
  }