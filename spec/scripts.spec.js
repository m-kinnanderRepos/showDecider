const getEpisode = require("../src/js/getEpisodeFromJSON");

describe("getEpisode", function() {
    var thing2 = JSON.parse('{"2020":[{"show":{"epguide_name":"marthasvineyardmysteries","title":"Martha\'s Vineyard Mysteries","imdb_id":"tt10768536"},"season":2020,"number":1,"title":"A Beautiful Place to Die","release_date":"2020-01-12"},{"show":{"epguide_name":"marthasvineyardmysteries","title":"Martha\'s Vineyard Mysteries","imdb_id":"tt10768536"},"season":2020,"number":2,"title":"Riddled with Deceit","release_date":"2020-02-23"}],"2021":[{"show":{"epguide_name":"marthasvineyardmysteries","title":"Martha\'s Vineyard Mysteries","imdb_id":"tt10768536"},"season":2021,"number":1,"title":"Ships in the Night","release_date":"2021-01-17"},{"show":{"epguide_name":"marthasvineyardmysteries","title":"Martha\'s Vineyard Mysteries","imdb_id":"tt10768536"},"season":2021,"number":2,"title":"Poisoned in Paradise","release_date":"2021-05-16"}],"2022":[]}')

    var bobs = JSON.parse(`{"1":[{"show":{"epguide_name":"bobsburgers","title":"Bobs Burgers","imdb_id":"tt1561755"},"season":1,"number":1,"title":"Human Flesh","release_date":"2011-01-09"},{"show":{"epguide_name":"bobsburgers","title":"Bobs Burgers","imdb_id":"tt1561755"},"season":1,"number":2,"title":"Crawl Space","release_date":"2011-01-16"},{"show":{"epguide_name":"bobsburgers","title":"Bobs Burgers","imdb_id":"tt1561755"},"season":1,"number":3,"title":"Sacred Cow","release_date":"2011-01-23"},{"show":{"epguide_name":"bobsburgers","title":"Bobs Burgers","imdb_id":"tt1561755"},"season":1,"number":4,"title":"Sexy Dance Fighting","release_date":"2011-02-13"},{"show":{"epguide_name":"bobsburgers","title":"Bobs Burgers","imdb_id":"tt1561755"},"season":1,"number":5,"title":"Hamburger Dinner Theater","release_date":"2011-02-20"}],
    "2":[{"show":{"epguide_name":"bobsburgers","title":"Bobs Burgers","imdb_id":"tt1561755"},"season":2,"number":1,"title":"The Belchies","release_date":"2012-03-11"},{"show":{"epguide_name":"bobsburgers","title":"Bobs Burgers","imdb_id":"tt1561755"},"season":2,"number":2,"title":"Bob Day Afternoon","release_date":"2012-03-18"},{"show":{"epguide_name":"bobsburgers","title":"Bobs Burgers","imdb_id":"tt1561755"},"season":2,"number":3,"title":"Synchronized Swimming","release_date":"2012-03-25"},{"show":{"epguide_name":"bobsburgers","title":"Bobs Burgers","imdb_id":"tt1561755"},"season":2,"number":4,"title":"Burgerboss","release_date":"2012-04-01"}],
    "3":[{"show":{"epguide_name":"bobsburgers","title":"Bobs Burgers","imdb_id":"tt1561755"},"season":3,"number":1,"title":"Ear-sy Rider","release_date":"2012-09-30"},{"show":{"epguide_name":"bobsburgers","title":"Bobs Burgers","imdb_id":"tt1561755"},"season":3,"number":2,"title":"Full Bars","release_date":"2012-10-07"},{"show":{"epguide_name":"bobsburgers","title":"Bobs Burgers","imdb_id":"tt1561755"},"season":3,"number":3,"title":"Bob Fires the Kids","release_date":"2012-11-04"},{"show":{"epguide_name":"bobsburgers","title":"Bobs Burgers","imdb_id":"tt1561755"},"season":3,"number":4,"title":"Mutiny on the Windbreaker","release_date":"2012-11-11"},{"show":{"epguide_name":"bobsburgers","title":"Bobs Burgers","imdb_id":"tt1561755"},"season":3,"number":5,"title":"An Indecent Thanksgiving Proposal","release_date":"2012-11-18"}],
    "4":[{"show":{"epguide_name":"bobsburgers","title":"Bob's Burgers","imdb_id":"tt1561755"},"season":4,"number":1,"title":"A River Runs Through Bob","release_date":"2013-09-29"},{"show":{"epguide_name":"bobsburgers","title":"Bob's Burgers","imdb_id":"tt1561755"},"season":4,"number":2,"title":"Fort Night","release_date":"2013-10-06"},{"show":{"epguide_name":"bobsburgers","title":"Bob's Burgers","imdb_id":"tt1561755"},"season":4,"number":3,"title":"Seaplane!","release_date":"2013-11-03"}]}`)
    

    describe("When episode inedex is euqal to 0", function(){
      it("getEpisode should return episode 1 from season 1", function() {
        expect(getEpisode(bobs, 0)).toEqual(bobs['1']['0']);
      });
       
    });

    describe("When episode inedex is euqal to 16", function(){
        it("getEpisode should return episode 3 from season 4", function() {
            expect(getEpisode(bobs, 16)).toEqual(bobs['4']['2']);
          });   
    });

    
  });