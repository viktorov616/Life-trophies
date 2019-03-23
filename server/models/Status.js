const mongoose = require('mongoose');

const { Schema } = mongoose;
const mongodbErrorHandler = require('mongoose-mongodb-errors');

const statusSchema = new Schema({
  name: {
    type: String,
    required: 'Please supply a name',
  },
});

statusSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('Status', statusSchema);
