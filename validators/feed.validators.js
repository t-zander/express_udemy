const { body } = require('express-validator/check');

exports.addPost = [
  body('title')
    .trim()
    .isLength({min: 5})
    .withMessage('Title should be at least 5 chars'),

  body('content')
    .trim()
    .isLength({min: 7})
    .withMessage('Content should be at least 7 chars')
];