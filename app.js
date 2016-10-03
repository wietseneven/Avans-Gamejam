const express = require('express');
const sassMiddleware = require('node-sass-middleware');
const path = require('path');
const app = express();

// Autocompile scss files to css and make them public
app.use(sassMiddleware({
  src: path.join(__dirname, 'src/scss'),
  dest: path.join(__dirname, 'public/assets/styles'),
  debug: false,
  outputStyle: 'compressed',
  prefix:  '/assets/styles',
  sourceMap: __dirname + '/public/maps/sourcemaps.maps'
}));

// Make everything in the public directory public
app.use(express.static(path.join(__dirname, 'public')));

// Use pug/jade as the render view engine
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});