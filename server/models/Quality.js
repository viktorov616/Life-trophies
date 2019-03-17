const mongoose = require('mongoose');

const { Schema } = mongoose;
const mongodbErrorHandler = require('mongoose-mongodb-errors');

const qualitySchema = new Schema({
  name: {
    type: String,
    required: 'Please supply a name',
  },
});

qualitySchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('quality', qualitySchema);
