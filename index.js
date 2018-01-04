const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/api', router);





app.listen(3000, function() {
  console.log('listening on port 3000!');
});




// Build a real web api that I can use to send an email to myself. Host it somewhere so I can play with it and make sure it actually sends a real email.
//
// I will make a POST request to the URL you give me and it will have a JSON body that looks like:
// { to: ‘myemail@example.com’, subject: “hello”, body: “world” }
//
//
//
// Guidelines
// - commit at the beginning, at the end, and often in between
// - feel free to use libraries, saas tools and platforms
// - write your own code, don’t copy-paste something from the internet
// - there’s no time limit but please do this all in one sitting if possible
// - put your result on github or bitbucket in a public repo
