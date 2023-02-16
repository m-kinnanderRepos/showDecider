import {createMostPopularGrid} from '../src/js/mostPopular.js'

describe("mostpopular grid", function() {
    const mostPopular = JSON.parse(`{"total":"23000","page":1,"pages":1150,"tv_shows":[
        {"id":35624,"name":"The Flash","permalink":"the-flash","start_date":"2014-10-07","end_date":null,"country":"US","network":"The CW","status":"Running","image_thumbnail_path":"https://static.episodate.com/images/tv-show/thumbnail/35624.jpg"},
        {"id":23455,"name":"Game of Thrones","permalink":"game-of-thrones","start_date":"2011-04-17","end_date":null,"country":"US","network":"HBO","status":"Ended","image_thumbnail_path":"https://static.episodate.com/images/tv-show/thumbnail/23455.jpg"},
        {"id":29560,"name":"Arrow","permalink":"arrow","start_date":"2012-10-10","end_date":null,"country":"US","network":"The CW","status":"Ended","image_thumbnail_path":"https://static.episodate.com/images/tv-show/thumbnail/29560.jpg"},
        {"id":43467,"name":"Lucifer","permalink":"lucifer","start_date":"2016-01-25","end_date":null,"country":"US","network":"Netflix","status":"Ended","image_thumbnail_path":"https://static.episodate.com/images/tv-show/thumbnail/43467.com"},
        {"id":43234,"name":"Supergirl","permalink":"supergirl","start_date":"2015-10-26","end_date":null,"country":"US","network":"The CW","status":"Ended","image_thumbnail_path":"https://static.episodate.com/images/tv-show/thumbnail/43234.jpg"}]}`)

    var beginListItem = `<div class="list-item">`
    var endListItem = `</div>`

    function createNameDiv(name) {
        return `<div class="name"><p>${name}</p></div>`
    }

    function createImageDiv(imageUrl) {
        return `<div class="image" style="background-image: url(&quot;${imageUrl}&quot;);"></div>`
    }

    describe("When mostPopularInfo is undefined", function(){
        it("grid should be empty", function() {
            var createdEmptyListItem = createMostPopularGrid(undefined)
            expect(createdEmptyListItem == '').toBe(true)
        });
    });

    describe("when mostPopularInfo has data", function(){
        it("list items should be populated", function() {
            var expectedListItems = ``
            for(let i = 0; i < mostPopular['tv_shows'].length; i++){
                expectedListItems = expectedListItems + beginListItem
                expectedListItems = expectedListItems + createNameDiv(mostPopular['tv_shows'][i]['name'])
                expectedListItems = expectedListItems + createImageDiv(mostPopular['tv_shows'][i]['image_thumbnail_path'])
                expectedListItems = expectedListItems + endListItem
            }
            var actualListItems = createMostPopularGrid(mostPopular)

            expect(expectedListItems == actualListItems).toBe(true)
        });
    });
    
  });