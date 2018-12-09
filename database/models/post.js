const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = Schema(
  {
    title: {type: String, required: true},
    imgUrl: {type: String, required: true},
    content: {type: String, required: true},
    creator: {type: Object, required: true}
  },
  {timestamps: true}
);

const creatorSchema = Schema({
  name: String
});

module.exports = mongoose.model('Post', postSchema, 'Posts');
