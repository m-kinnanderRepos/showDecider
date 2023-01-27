// const getEpisode = require("../src/js/getEpisodeFromJSON");
import {getEpisode} from '../src/js/getEpisodeFromJSON.js'

describe("getEpisode", function() {
    console.log("in 2222")
    // var thing2 = JSON.parse('{"2020":[{"show":{"epguide_name":"marthasvineyardmysteries","title":"Martha\'s Vineyard Mysteries","imdb_id":"tt10768536"},"season":2020,"number":1,"title":"A Beautiful Place to Die","release_date":"2020-01-12"},{"show":{"epguide_name":"marthasvineyardmysteries","title":"Martha\'s Vineyard Mysteries","imdb_id":"tt10768536"},"season":2020,"number":2,"title":"Riddled with Deceit","release_date":"2020-02-23"}],"2021":[{"show":{"epguide_name":"marthasvineyardmysteries","title":"Martha\'s Vineyard Mysteries","imdb_id":"tt10768536"},"season":2021,"number":1,"title":"Ships in the Night","release_date":"2021-01-17"},{"show":{"epguide_name":"marthasvineyardmysteries","title":"Martha\'s Vineyard Mysteries","imdb_id":"tt10768536"},"season":2021,"number":2,"title":"Poisoned in Paradise","release_date":"2021-05-16"}],"2022":[]}')

    // var bobs = JSON.parse(`{"1":[{"show":{"epguide_name":"bobsburgers","title":"Bobs Burgers","imdb_id":"tt1561755"},"season":1,"number":1,"title":"Human Flesh","release_date":"2011-01-09"},{"show":{"epguide_name":"bobsburgers","title":"Bobs Burgers","imdb_id":"tt1561755"},"season":1,"number":2,"title":"Crawl Space","release_date":"2011-01-16"},{"show":{"epguide_name":"bobsburgers","title":"Bobs Burgers","imdb_id":"tt1561755"},"season":1,"number":3,"title":"Sacred Cow","release_date":"2011-01-23"},{"show":{"epguide_name":"bobsburgers","title":"Bobs Burgers","imdb_id":"tt1561755"},"season":1,"number":4,"title":"Sexy Dance Fighting","release_date":"2011-02-13"},{"show":{"epguide_name":"bobsburgers","title":"Bobs Burgers","imdb_id":"tt1561755"},"season":1,"number":5,"title":"Hamburger Dinner Theater","release_date":"2011-02-20"}],
    // "2":[{"show":{"epguide_name":"bobsburgers","title":"Bobs Burgers","imdb_id":"tt1561755"},"season":2,"number":1,"title":"The Belchies","release_date":"2012-03-11"},{"show":{"epguide_name":"bobsburgers","title":"Bobs Burgers","imdb_id":"tt1561755"},"season":2,"number":2,"title":"Bob Day Afternoon","release_date":"2012-03-18"},{"show":{"epguide_name":"bobsburgers","title":"Bobs Burgers","imdb_id":"tt1561755"},"season":2,"number":3,"title":"Synchronized Swimming","release_date":"2012-03-25"},{"show":{"epguide_name":"bobsburgers","title":"Bobs Burgers","imdb_id":"tt1561755"},"season":2,"number":4,"title":"Burgerboss","release_date":"2012-04-01"}],
    // "3":[{"show":{"epguide_name":"bobsburgers","title":"Bobs Burgers","imdb_id":"tt1561755"},"season":3,"number":1,"title":"Ear-sy Rider","release_date":"2012-09-30"},{"show":{"epguide_name":"bobsburgers","title":"Bobs Burgers","imdb_id":"tt1561755"},"season":3,"number":2,"title":"Full Bars","release_date":"2012-10-07"},{"show":{"epguide_name":"bobsburgers","title":"Bobs Burgers","imdb_id":"tt1561755"},"season":3,"number":3,"title":"Bob Fires the Kids","release_date":"2012-11-04"},{"show":{"epguide_name":"bobsburgers","title":"Bobs Burgers","imdb_id":"tt1561755"},"season":3,"number":4,"title":"Mutiny on the Windbreaker","release_date":"2012-11-11"},{"show":{"epguide_name":"bobsburgers","title":"Bobs Burgers","imdb_id":"tt1561755"},"season":3,"number":5,"title":"An Indecent Thanksgiving Proposal","release_date":"2012-11-18"}],
    // "4":[{"show":{"epguide_name":"bobsburgers","title":"Bob's Burgers","imdb_id":"tt1561755"},"season":4,"number":1,"title":"A River Runs Through Bob","release_date":"2013-09-29"},{"show":{"epguide_name":"bobsburgers","title":"Bob's Burgers","imdb_id":"tt1561755"},"season":4,"number":2,"title":"Fort Night","release_date":"2013-10-06"},{"show":{"epguide_name":"bobsburgers","title":"Bob's Burgers","imdb_id":"tt1561755"},"season":4,"number":3,"title":"Seaplane!","release_date":"2013-11-03"}],
    // "5":[{"show":{"epguide_name":"bobsburgers","title":"Bob's Burgers","imdb_id":"tt1561755"},"season":13,"number":1,"title":"TBA","release_date":"2022-09-25"}]}`)

    var arrow = JSON.parse(`{"tvShow":{"id":29560,"name":"Arrow","permalink":"arrow","url":"https://www.episodate.com/tv-show/arrow","description":"Arrow is an American television series developed by writer/producers Greg Berlanti, Marc Guggenheim, and Andrew Kreisberg. It is based on the DC Comics character Green Arrow, a costumed crime-fighter created by Mort Weisinger and George Papp. It premiered in North America on The CW on October 10, 2012, with international broadcasting taking place in late 2012. Primarily filmed in Vancouver, British Columbia, Canada, the series follows billionaire playboy Oliver Queen, portrayed by Stephen Amell, who, five years after being stranded on a hostile island, returns home to fight crime and corruption as a secret vigilante whose weapon of choice is a bow and arrow. Unlike in the comic books, Queen does not go by the alias \"Green Arrow\". The series takes a realistic look at the Green Arrow character, as well as other characters from the DC Comics universe. Although Oliver Queen/Green Arrow had been featured in the television series Smallville from 2006 to 2011, the producers decided to start clean and find a new actor (Amell) to portray the character. Arrow focuses on the humanity of Oliver Queen, and how he was changed by time spent shipwrecked on an island. Most episodes have flashback scenes to the five years in which Oliver was missing.","description_source":"http://en.wikipedia.org/wiki/Arrow_%28TV_series%29","start_date":"2012-10-10","end_date":null,"country":"US","status":"Ended","runtime":60,"network":"The CW","youtube_link":null,"image_path":"https://static.episodate.com/images/tv-show/full/29560.jpg","image_thumbnail_path":"https://static.episodate.com/images/tv-show/thumbnail/29560.jpg","rating":"9.1159","rating_count":"647","countdown":null,"genres":["Drama","Action","Science-Fiction"],"pictures":["https://static.episodate.com/images/episode/29560-242.jpg","https://static.episodate.com/images/episode/29560-804.jpg","https://static.episodate.com/images/episode/29560-664.jpg","https://static.episodate.com/images/episode/29560-120.jpg","https://static.episodate.com/images/episode/29560-764.jpg","https://static.episodate.com/images/episode/29560-792.jpg","https://static.episodate.com/images/episode/29560-159.jpg"],
    "episodes":[{"season":1,"episode":1,"name":"Pilot","air_date":"2012-10-11 00:00:00"},{"season":1,"episode":2,"name":"Honor Thy Father","air_date":"2012-10-18 00:00:00"},{"season":1,"episode":3,"name":"Lone Gunmen","air_date":"2012-10-25 00:00:00"},{"season":1,"episode":4,"name":"An Innocent Man","air_date":"2012-11-01 00:00:00"},{"season":1,"episode":5,"name":"Damaged","air_date":"2012-11-08 01:00:00"},
    {"season":2,"episode":1,"name":"City of Heroes","air_date":"2013-10-10 00:00:00"},{"season":2,"episode":2,"name":"Identity","air_date":"2013-10-17 00:00:00"},{"season":2,"episode":3,"name":"Broken Dolls","air_date":"2013-10-24 00:00:00"},{"season":2,"episode":4,"name":"Crucible","air_date":"2013-10-31 00:00:00"},
    {"season":3,"episode":1,"name":"The Calm","air_date":"2014-10-09 00:00:00"},{"season":3,"episode":2,"name":"Sara","air_date":"2014-10-16 00:00:00"},{"season":3,"episode":3,"name":"Corto Maltese","air_date":"2014-10-23 00:00:00"},{"season":3,"episode":4,"name":"The Magician","air_date":"2014-10-30 00:00:00"},{"season":3,"episode":5,"name":"The Secret Origin of Felicity Smoak","air_date":"2014-11-06 01:00:00"}]}}`)
    
    console.log("in 444")


    describe("When episode index is equal to 0", function(){
      it("getEpisode should return episode 1 from season 1", function() {
        expect(getEpisode(arrow, 0)).toEqual(arrow['episodes'][0]);
      });
       
    });

    describe("When episode index is equal to 16", function(){
        it("getEpisode should return episode 3 from season 4", function() {
            expect(getEpisode(arrow, 16)).toEqual(arrow['episodes'][16]);
        });   
    });

    describe("When episode index is equal to 5", function(){
        it("getEpisode should return episode 1 from season 2", function() {
            expect(getEpisode(arrow, 5)).toEqual(arrow['episodes'][5]);
        });   
    });

    describe("When episode index is equal to 17", function(){
        it("getEpisode should return episode 1 from season 5", function() {
            expect(getEpisode(arrow, 17)).toEqual(arrow['episodes'][17]);
        });   
    });

    describe("When no episode index is given", function(){
        it("getEpisode should return a random episode", function() {
            expect(getEpisode(arrow)).toBeDefined();
        });   
    });

    
  });