var express = require('express');
 var morgan = require('morgan');
 var path = require('path');
 var Pool = require('pg').Pool;
 

  var app = express();
  app.use(morgan('combined'));
  
var articles = {
 -    'article-one': {
 -      title: 'Article One | Tanmai Gopal',
 -      heading: 'Article One',
 -      date: 'Sep 5, 2016',
 -      content: `
 -          <p>
 -              This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. 
 -          </p>
 -         
 -    },
 -    'article-two': {
 -      title: 'Article Two | Tanmai Gopal',
 -      heading: 'Article Two',
 -      date: 'Sep 10, 2016',
 -      content: `   This is the content for my second article. 
 -    }
 -    'article-three': {
 -      title: 'Article Three | Tanmai Gopal',
 -      heading: 'Article Three',
 -      date: 'Sep 15, 2016',
 -      content: `
 -          <p>
 -              This is the content for my third article.
 -          </p>`
 -    }
 -};
 -
  
 
 app.get('/ui/style.css', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'style.css'));
 });
 
 app.get('/ui/main.js', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'main.js'));
 });
 
 app.get('/ui/madi.png', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
 });
 
 var port = 8080; // Use 8080 for local development because you might already have apache running on 80
 app.listen(8080, function () {
   console.log(`IMAD course app listening on port ${port}!`);
 });