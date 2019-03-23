const mongoose = require('mongoose');

const Status = mongoose.model('Status');

exports.createStatus = async (req, res) => {
  const status = await (new Status(req.body)).save();

  res.json(status);
}
