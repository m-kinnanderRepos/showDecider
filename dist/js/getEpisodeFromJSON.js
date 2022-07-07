function getEpisode(responseData, indexNumber) {
  console.log('in da function!')
  var obj = Object.values(responseData);
  const flatmapResponseData = obj.flat(1); //The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
  
  if(indexNumber == undefined){
    console.log('indexNumber is undefined.')
    indexNumber = Math.floor(Math.random() * flatmapResponseData.length) -1
  }

  return flatmapResponseData[indexNumber]
}

// module.exports = getEpisode; 

