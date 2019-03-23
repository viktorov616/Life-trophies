const mongoose = require('mongoose');

const User = mongoose.model('User');

exports.createUser = async (req, res) => {
  const user = await (new User(req.body)).save();

  res.json(user);
}
