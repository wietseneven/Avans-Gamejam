'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io').listen(server);

// Make everything in the public directory public
app.use(express.static(path.join(__dirname, 'public')));

// Use pug/jade as the render view engine
app.set('view engine', 'pug');


// Allow Cross-Origin requests, just leave this as is
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  res.render('index', {title: 'Hey', message: 'Hello there!'});
});

const highscoresDB = './data/highscores.json';
app.post('/getscores', function (req, res) {
  const highscores = JSON.parse(fs.readFileSync(highscoresDB, 'utf-8'));
  res.send(highscores);
});

// Enable bodyParser to properly read POST request bodies
app.use(bodyParser.json());
app.post('/postscore', function (req, res) {
  console.log(req.body);
  let highscores = JSON.parse(fs.readFileSync(highscoresDB, 'utf-8'));
  highscores.scores.push(req.body);

  const printableScores = JSON.stringify(highscores);

  fs.writeFile(highscoresDB, printableScores, function (err) {
    if (err) throw('File save error: ' + err);
    res.send(highscores);
  });
});

server.listen(7933, function () {
  console.log('Example app listening on port 7933!');
});


let connectedUsers = 0;
io.on('connection', function(socket){
  console.log('a user connected');
  connectedUsers++;
  io.emit('users online', connectedUsers + ' players online');

  socket.on('disconnect', function() {
    console.log('user disconnected');
    connectedUsers--;
    io.emit('users online', connectedUsers + ' players online');
  })
});