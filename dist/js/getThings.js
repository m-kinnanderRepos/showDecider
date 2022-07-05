function getEpisode(responseData, indexNumber) {
    console.log(responseData)
    numEpisodes = 0
    for (const [key, value] of Object.entries(responseData)) {
      console.log(`${key}: ${value}`);
      console.log(Object.keys(value).length)
      numEpisodes += Object.keys(value).length
    }
    console.log(numEpisodes)
    showData = Math.floor(Math.random() * numEpisodes) -1
    console.log(showData)
  
    var currentIndex = 0
    var currentNumShows = Object.keys(responseData['1']).length -1
    var seasonPicker = 1
    while(currentNumShows < indexNumber){
      currentIndex = currentIndex + Object.keys(responseData[seasonPicker.toString()]).length
      console.log("currentIndex now equals: " + currentIndex.toString())
      seasonPicker = seasonPicker + 1
      console.log("seasonPicker now equals: " + seasonPicker.toString())
      currentNumShows = currentNumShows + Object.keys(responseData[seasonPicker.toString()]).length -1
      console.log("currentNumShows now equals: " + currentNumShows.toString())
    }
  
  
    var episodePicker = 0
    // debugger;
    while(currentIndex + episodePicker < indexNumber){
      console.log(currentIndex + episodePicker)
      console.log(currentIndex + episodePicker <= indexNumber)
      // debugger;
      episodePicker = episodePicker + 1
      console.log("episodePicker now equals: " + episodePicker.toString())
    }
  
    var episodeInfo = responseData[seasonPicker.toString()][episodePicker.toString()]
    console.log(episodeInfo)
  }
  
  module.exports = getEpisode;