const express = require('express');
const path = require('path');
const request = require('request');

// Get process.env from .env file if it exists
require('dotenv').config();

const app = express();
// Set port to use if env doesnt set one
const PORT = process.env.PORT || 5000;

app.get('/api/test', function(req, res) {
  console.log(req);
  res.json({test:"test"});
});

app.get('/api/getstream', function(req, res) {
  const baseUrl = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true";
  var url;
  if (req.query.tags) {
    url = baseUrl + "&tags=" + req.query.tags;
  } else {
    url = baseUrl;
  }
  request(url, function (error, response, body) {
    if (error) {
      res.json({"error" : error});
    } else {
      try {
        // Convert ' to &apos; before attempting to JSON parse
        bodyFixed = body.replace(/\'/g,"&apos;");
        if (!!body.replace(/\'/g,"&apos;")) {
          console.log("BODY")
          console.log(body);
          console.log("BODYFIXED")
          console.log(bodyfixed);
        }
        
        res.json(JSON.parse(bodyFixed));
      }
      catch(err) {
        res.json({"error" : "Server error, please try again"});
        console.log(err);
        console.log(body);
      }
    }
  });

});

// Static files
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

// Remaining requests return the React app
app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`);
});
