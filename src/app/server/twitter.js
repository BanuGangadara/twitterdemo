const express = require('express');
const Twitter = require('twit');
 
const app = express();
const client = new Twitter({
  consumer_key: 'f9QfmVA4sEs9PthUpsL2sUbEc',
  consumer_secret: 'SxxmLu3hp1EVk5CdEBnjwGH8oqx7wqTLRleECOSMQTznbrzYSL',
  access_token: '1204553746564276224-KK5xpimhQ8KIhuvAGBCfvmuIFy8EDB',
  access_token_secret: 'TF5rkqbfP2RZzpz7l69pNxkSJDVDnal89j8U7eKq7TXSp'
});
 
 
app.use(require('cors')());
app.use(require('body-parser').json());
 
app.get('/search', (req, res) => {
    var params = {
    q: 'swiggy',
    count: 10
    } 
    client
      .get('search/tweets', params)
      .then(timeline => {
        console.log(timeline);
        res.send(timeline);
      })
 
     .catch(error => {
      res.send(error);
    });
       
    
});
 
app.listen(3000, () => console.log('Server running'));