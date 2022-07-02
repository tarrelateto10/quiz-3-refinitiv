const HtmlTableToJson = require('html-table-to-json');
const axios = require('axios');

const arg = process.argv.slice(2)[0];

const url = 'https://codequiz.azurewebsites.net'
// Make a request for a user with a given ID
axios.get(url,{
  headers:{
    Cookie: "hasCookie=true"
  }
})
  .then(function (response) {
    // get response
    const jsonTables=  HtmlTableToJson.parse(response.data)
    const result = jsonTables.results[0].find(data=>data['Fund Name'] === arg)
    console.log(result.Nav)
    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
