/** tesintg
 *
 */

// console.log('object');

// const test = (name) => {
//   return `Välkommen ${name}!`;
// }

// console.log(test('Bertil'));
// const moment = require('moment')

// console.log(moment().format('YYYY-MM-DD'));

const nodeFetch = require('node-fetch')

nodeFetch('https://avancera.app/cities')
  .then((response) => response.json())
  .then((result) => {console.log(result)})
