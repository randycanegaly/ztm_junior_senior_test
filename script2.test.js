const swapi = require('./script2');
// const fetch = require('node-fetch'); you no longer need this package if you have the latest version of Node!

it('calls swapi to get people', () => {
  //expect.assertions(number) verifies that a
  // certain number of assertions are called during a
  // test. This is often useful when testing asynchronous
  //code, in order to make sure that assertions in a
  //callback actually got called.
  expect.assertions(1)
  return swapi.getPeople(fetch).then(data => {
    expect(data.count).toEqual(87);
  })
})