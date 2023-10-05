const bannarModels = require("../models/bannarModels");
const fs = require("fs");

const bannarDeleteControllar = async (req, res) => {
  try {
    const { id } = req.body;
    const item = await bannarModels.findById(id);
    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }
    const imgPath = item.img;
    if (imgPath) {
      fs.unlinkSync(imgPath);
    }
    await bannarModels.findByIdAndRemove(id);
    return res.json({ success: "Delete successfully" });
  } catch (error) {
    console.error("Error deleting item:", error);
    return res.status(500).json({ error: "Failed to delete item" });
  }
};

const allbannar = async (req, res) => {
  let all = await bannarModels.find({});
  res.json(all);
};
module.exports = { bannarDeleteControllar, allbannar };
