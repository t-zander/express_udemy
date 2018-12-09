const mongoose = require('mongoose');
const uri = 'mongodb+srv://t-zander:uDYNwruNn6x4Jq5d@cluster0-gmbxx.mongodb.net/shop?retryWrites=true';

module.exports.connectToMongoose = () => {
  mongoose
    .connect(uri, {useNewUrlParser: true})
    .then(res => console.log('successfully connected to mongodb'))
    .catch(err => {
      console.log(err);
    });
}