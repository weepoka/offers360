const multer = require("multer");
const path = require("path");
const fs = require("fs");
const JobOffer = require("../models/jobOfferModels.js");
const jobOfferModels = require("../models/jobOfferModels.js");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/job-offer-logos");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extname = path.extname(file.originalname);
    cb(null, "logo-" + uniqueSuffix + extname);
  },
});

const upload = multer({ storage: storage });

const jobOfferControllar = {
  createJobOffer: async (req, res) => {
    if (!req.file) {
      return res.status(400).json({ error: "No logo file uploaded" });
    }
    try {
      const { jobTitle, jobDescription, salary, link } = req.body;

      const jobOffer = new JobOffer({
        jobTitle,
        logo: `uploads/job-offer-logos/${req.file.filename}`,
        jobDescription,
        salary,
        link,
      });
      jobOffer.save();

      res.status(200).json({ message: "Job offer created successfully" });
    } catch (error) {
      console.error("Error creating job offer:", error);
      res.status(500).json({ error: "Failed to create job offer" });
    }
  },

  getAllJobOffers: async (req, res) => {
    try {
      const jobOffers = await JobOffer.find();
      res.json(jobOffers);
    } catch (error) {
      console.error("Error fetching job offers:", error);
      res.status(500).json({ error: "Failed to fetch job offers" });
    }
  },
  deleteJobOffer: async (req, res) => {
    try {
      let { id } = req.body;
      let item = await jobOfferModels.findById(id);
      console.log(item);
      if (!item) {
        return res.json({ error: "Job offer not found" });
      }
      const imgpath = item.logo;
      if (imgpath) {
        fs.unlinkSync(imgpath);
      }
      await jobOfferModels.findByIdAndRemove(id);
      return res.json({ success: "succesfully Deteled" });
    } catch (e) {
      return res.json({ error: "error Deteled" });
    }
  },
};

module.exports = {
  createJobOffer: upload.single("file"),
  handleCreateJobOffer: jobOfferControllar.createJobOffer,
  getAllJobOffers: jobOfferControllar.getAllJobOffers,
  deleteJobOffer: jobOfferControllar.deleteJobOffer,
};
