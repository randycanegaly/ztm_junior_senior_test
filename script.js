const googleDatabase = [
    'cats.com',
    'souprecipes.com',
    'flowers.com',
    'animals.com',
    'catpictures.com',
    'myfavoritecats.com',
    'moreandmoredumbcats.com'
];

const googleSearch = (searchInput, db) => {
    if (searchInput == '') {
        return [];
    }
    const matches = db.filter( site => {
        return site.includes(searchInput);
    })

    return matches.length > 3 ? matches.slice(0, 3) : matches;
    //return matches;
}

//console.log(googleSearch('cats', googleDatabase));

module.exports = { googleSearch };