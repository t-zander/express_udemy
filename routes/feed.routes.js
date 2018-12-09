const router = require('express').Router();
const feedController = require('../controllers/feed.controller');
const feedValidators = require('../validators/feed.validators');

router.get('/posts', feedController.getPosts);
router.post('/post', feedValidators.addPost, feedController.createPost);



module.exports = router;