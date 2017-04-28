var router = require('express').Router();
var mongoose = require('mongoose');

var db = 'mongodb://admin:admin@ds123351.mlab.com:23351/express-server-videos'
mongoose.Promise = global.Promise;
mongoose.connect(db, function(err) {
  if (err) {
    console.error('Error connecting to database ' + db + ' :' + err);
  } else {
    console.log('Successfully connected to database ' + db);
  }
});

router.use('/videos', require('./videos'));

module.exports = router;
