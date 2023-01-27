export function getEpisode(responseData, indexNumber) {
  var obj = Object.values(responseData);
  
  if(obj[0].length == 0){
    return []
  }

  if(indexNumber == undefined){
    indexNumber = Math.floor(Math.random() * obj[0]['episodes'].length) -1
  }

  return obj[0]['episodes'][indexNumber]
}
