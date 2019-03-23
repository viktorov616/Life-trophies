const mongoose = require('mongoose');

const Category = mongoose.model('Category');

exports.createCategory = async (req, res) => {
  const category = await (new Category(req.body)).save();

  res.json(category);
}
