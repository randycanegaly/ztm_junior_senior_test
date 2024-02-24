const googleSearch = require('./script');

const dbMock = [
    'dog.com',
    'cheesepuff.com',
    'disney.com',
    'dogpictures.com'
]

describe('googleSearch', () => {
    it('is a silly test', () => {
        expect('hello').toBe('hello');
    })

    it('is googleSearch', () => {
        expect(googleSearch.googleSearch('testtest', dbMock)).toEqual([]);
        expect(googleSearch.googleSearch('cheese', dbMock)).toEqual([ 'cheesepuff.com' ]);    
    })

    it('works with undefined and null inputs', () => {
        expect(googleSearch.googleSearch(undefined, dbMock)).toEqual([]);
        expect(googleSearch.googleSearch(null, dbMock)).toEqual([]);
        expect(googleSearch.googleSearch('', dbMock)).toEqual([]);
    })

    it('does not return more than 3 matches', () => {
        const length = googleSearch.googleSearch('com', dbMock).length;
        expect(length).toBeLessThanOrEqual(3);
    })
})

