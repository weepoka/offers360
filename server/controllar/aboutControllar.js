const aboutModels = require("../models/aboutModels");

const aboutController = async (req, res) => {
  const { about, mission } = req.body;

  try {
    let existingRecord = await aboutModels.findOne();

    if (!existingRecord) {
      existingRecord = new aboutModels({
        about: about,
        mission: mission,
      });
    } else {
      existingRecord.about = about;
      existingRecord.mission = mission;
    }

    await existingRecord.save();

    res.json({ success: "Successfully updated" });
  } catch (error) {
    console.error("Error updating about and mission:", error);
    res.status(500).json({ error: "Failed to update about and mission" });
  }
};

module.exports = aboutController;
