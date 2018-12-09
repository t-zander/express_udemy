const { validationResult } = require('express-validator/check');

exports.getPosts = (req, res) => {
  const posts = [
    {
      _id: 1,
      title: 'First post',
      createdAt: new Date(),
      imgUrl: 'images/cat.jpg',
      content: 'The first post bla bla bla',
      creator: {
        name: 'Nick'
      }
    }
  ]
  res.status(200).json({posts});
};

exports.createPost = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ message: 'invalid data', errors: errors.array() });
  };

  const post = {
    _id: new Date(),
    title: req.body.title,
    content: req.body.content,
    creator: {
      name: 'Nick'
    },
    createdAt: new Date()
  }

  res.status(201).json({post});
}