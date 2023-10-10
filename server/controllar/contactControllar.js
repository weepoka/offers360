const contackModels = require("../models/contackModels");

const contactControllar = async (req, res) => {
  const { category, email, number } = req.body;
  let existingCategory = await contackModels.findOne({ category });
  if (!existingCategory) {
    existingCategory = new contackModels({
      category,
      email,
      number,
    });
  } else {
    existingCategory.category = category;
    existingCategory.email = email;
    existingCategory.number = number;
  }
  await existingCategory.save();
  res.json({ success: "successfully updated" });
};

const getContactControllar = async (req, res) => {
  let data = await contackModels.find({});
  return res.json(data);
};

module.exports = { contactControllar, getContactControllar };
