var router = require('express').Router();
var Video = require('../../models/video');

/**
 * Return a list of all videos in the collection.
 */
router.get('/', function(req, res, next) {
  console.log('Get request for all videos');

  Video.find({})
    .exec(function(err, videos) {
      if (err) {
        console.error('Error retrieving videos due to: ' + err);
      } else {
        res.json(videos);
      }
    });
});

/**
 * Insert a new video.
 */
router.post('/', function(req, res, next) {
  console.log('Post a new video');

  var newVideo = new Video({
    title: req.body.title,
    url: req.body.url,
    description: req.body.description
  });

  newVideo.save(function(err, insertedVideo) {
    if (err) {
      console.error('Error saving a new video');
    } else {
      res.json(insertedVideo);
    }
  });
})

/**
 * Return a specific video based on its ID.
 */
router.get('/:id', function(req, res, next) {
  console.log('Get video with id: ' + req.params.id);

  Video.findById(req.params.id)
    .exec(function(err, video) {
      if (err) {
        console.error('Error retrieving video with id: ' + req.params.id);
      } else {
        res.json(video);
      }
    })
});

/**
 * Update a specific video based on its ID.
 */
router.put('/:id', function(req, res, next) {
  console.log('Update video with id: ' + req.params.id);

  Video.findByIdAndUpdate(req.params.id, {
    $set: {
      title: req.body.title,
      url: req.body.url,
      description: req.body.description
    }
  },
  {
    new: true
  },
  function(err, updatedVideo) {
    if (err) {
      res.send('Error update video with id: ' + req.params.id);
    } else {
      res.json(updatedVideo);
    }
  })
});

router.delete('/:id', function(req, res, next) {
  console.log('Delete video with id: ' + req.params.id);

  Video.findByIdAndRemove(req.params.id, function(err, deletedVideo) {
    if (err) {
      res.send('Error deleting video with id: ' + req.params.id);
    } else {
      res.json(deletedVideo);
    }
  });
});

module.exports = router;
