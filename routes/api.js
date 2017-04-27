var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Video = require('../models/video');

var db = 'mongodb://admin:admin@ds123361.mlab.com:23361/express-ember-video'
mongoose.Promise = global.Promise;
mongoose.connect(db, function(err) {
  if (err) {
    console.error('Error connecting to database ' + db + ' :' + err);
  } else {
    console.log('Successfully connected to database ' + db);
  }
});

router.get('/', function(req, res, next) {

});

router.get('/videos', function(req, res, next) {
  console.log('Get request for all videos');

  Video.find({})
    .exec(function(err, videos) {
      if (err) {
        console.error('Error retrieving videos due to: ' + err);
      } else {
        res.json(videos);
      }
    });
})

module.exports = router;
