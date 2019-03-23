const mongoose = require('mongoose');

const Quality = mongoose.model('Quality');

exports.createQuality = async (req, res) => {
  const quality = await (new Quality(req.body)).save();

  res.json(quality);
}
