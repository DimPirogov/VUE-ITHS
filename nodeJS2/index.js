// const nodeFetch = require('node-fetch')

// nodeFetch('https://avancera.app/cities')
//   .then((response) => response.json())
//   .then((result) => {console.log(result.length);})
const nodeFetch = require('axios')

nodeFetch.get('https://avancera.app/cities')
  .then(function(response) {
    console.log(response.data.length);
  })
