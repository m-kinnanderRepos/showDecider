const getAboutUsLink = require("./scripts");

test("Return about-us for english language", () => {

    var show = {'1': {show: {epguide_name: 'bobsburgers', title: "Bob's Burgers", imdb_id: 'tt1561755'}, season: 1, number: 1, title: 'Human Flesh', release_date: '2011-01-09'}}
    var thing = {'1': show, '2': show}
    expect(getAboutUsLink(thing, 0)).toBe(show);

});