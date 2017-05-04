express = require('express');
request = require('request');

// Constants
PORT = 8080;

// App
app = express();
app.get('/', function (req, res) {

  request('http://aproach-api.muc.amadeus.net/api/json/records/?keywords=UA_Consistency&status=opened&with=simplified', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.

    res.send(JSON.stringify(body, null, 4));

  });


});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
