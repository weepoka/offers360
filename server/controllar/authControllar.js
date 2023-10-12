const authModels = require("../models/authModels");

const authControllar = async (req, res) => {
  const { email, password } = req.body;
  try {
    let data = await authModels.findOne({ email });
    if (!data) {
      return res.status(400).json({ error: "authentication error" });
    }
    if (data.password === password) {
      return res.status(200).json(data);
    } else {
      return res.status(400).json({ error: "authentication error" });
    }
  } catch (error) {
    res.json({ error: "500 Internal Server Error" });
  }
};

module.exports = authControllar;
