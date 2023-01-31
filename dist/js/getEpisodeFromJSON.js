export function getEpisode(responseData, indexNumber) {
  // This worked on the original api endpoint. Does not work anymore. Keeping it for reference.
  // var obj = Object.values(responseData);
 
  if(responseData['tvShow'].length == 0){
    return []
  }

  if(indexNumber == undefined){
    indexNumber = Math.floor(Math.random() * responseData['tvShow']['episodes'].length) -1
  }

  return responseData['tvShow']['episodes'][indexNumber]
}
