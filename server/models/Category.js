const mongoose = require('mongoose');

const { Schema } = mongoose;
const mongodbErrorHandler = require('mongoose-mongodb-errors');

const categorySchema = new Schema({
  name: {
    type: String,
    required: 'Please supply a name',
  },
});

categorySchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('Category', categorySchema);
