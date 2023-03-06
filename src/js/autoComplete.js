function apiCall(){
    const searchMovieDiv = document.getElementById('inputResultDiv')
    
    var searchInputText = document.getElementById("searchInput").value;

    if (searchInputText.length >= 3 ) {
        let oldTable = document.getElementById("myTable")
        if(oldTable) oldTable.parentNode.removeChild(oldTable)
        while (document.getElementsByClassName('autocompleteResult')[0]) {
            document.getElementsByClassName('autocompleteResult')[0].parentNode.removeChild(document.getElementsByClassName('autocompleteResult')[0]);
        }
        var request = new XMLHttpRequest();
        request.open('GET', 'https://www.episodate.com/api/search?q=' + searchInputText + '&page=1', true);
        request.onload = function () {
            // Begin accessing JSON data here
            var data = JSON.parse(this.response);
            if (request.status >= 200 && request.status < 400) {
                var string = ''
                Object.keys(data['tv_shows']).map(function(key, index) {
                    var thediv = `<div class="form-control rounded autocompleteResult"><p1 class="autocompleteText" id="autoCompleteText" permalink=${data['tv_shows'][index]['permalink']}  >${data['tv_shows'][index]['name']}</p1></div>`
                    string = string + thediv
                });
            } else {
                console.log('error');
            }
            searchMovieDiv.innerHTML = string
        };
        request.send();
    }
}