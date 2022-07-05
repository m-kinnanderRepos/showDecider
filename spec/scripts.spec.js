const getEpisode = require("../src/js/getEpisodeFromJSON");

describe("getEpisode", function() {
    var thing1 = JSON.parse('{"1":[{"show":{"epguide_name":"bobandrose","title":"Bob & Rose","imdb_id":"tt0295071"},"season":1,"number":1,"title":"Episode 1","release_date":"2001-09-10"}]}')

    describe("When episode inedex is euqal to 0", function(){
       
      it("should return episode 1 from season 1", function() {
        expect(getEpisode(thing1, 0)).toEqual(thing1['1']['0']);
      });
       
    });
  });