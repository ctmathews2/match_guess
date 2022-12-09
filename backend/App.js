require("dotenv").config();
const express = require("express");
const Quote = require('inspirational-quotes');
const app = express();
const axios = require('axios');
// const got = require('got');
// const { pipeline } = require('stream');

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get("/", function(req, res) {
  // console.log('HERE', req.query);
  axios.get(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${req.query.answer}?api_key=`)
  .then(function(response) {
    // console.log(response.data);
    res.send(response.data);
  }).catch(function(err) {
    console.log(err);
  });

});

// router.get('/', function(req, res) {
//   const dataStream = got.stream({
//       uri: 'http://www.giantbomb.com/api/search',
//       qs: {
//         api_key: '123456',
//         query: 'World of Warcraft: Legion'
//       }
//   });
//   pipeline(dataStream, res, (err) => {
//       if (err) {
//           console.log(err);
//           res.sendStatus(500);
//       }
//   });
// });


let port = process.env.PORT;
if(port == null || port == "") {
 port = 5000;
}

app.listen(port, function() {
 console.log("Server started successfully");
 console.log(process.env.api_key);
});

// module.exports = router;