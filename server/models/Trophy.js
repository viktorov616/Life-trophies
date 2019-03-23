const mongoose = require('mongoose');

const { Schema } = mongoose;
const mongodbErrorHandler = require('mongoose-mongodb-errors');

const trophySchema = new Schema({
  name: {
    type: String,
    required: 'Please supply a name',
  },
  description: String,
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: 'You must supply a user id',
  },
  categoryId: { // TODO: make research, maybe change for just category
    type: mongoose.Schema.ObjectId,
    ref: 'Category',
    required: 'You must supply a category id',
  },
  qualityId: { // TODO: make research, maybe change for just quality
    type: mongoose.Schema.ObjectId,
    ref: 'Quality',
    required: 'You must supply a quality id',
  },
  date: {
    type: Date,
    required: 'You must supply a date'
  },
  status: {
    type: mongoose.Schema.ObjectId,
    ref: 'Status',
    required: 'You must supply a status',
  }
});

trophySchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('trophy', trophySchema);
