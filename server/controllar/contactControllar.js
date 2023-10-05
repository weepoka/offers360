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

module.exports = contactControllar;
