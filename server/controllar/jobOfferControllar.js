const multer = require("multer");
const path = require("path");
const fs = require("fs");
const JobOffer = require("../models/jobOfferModels.js");

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
    try {
      const { jobTitle, jobDescription, salary, link } = req.body;
      console.log(jobTitle);
      if (!req.file) {
        return res.status(400).json({ error: "No logo file uploaded" });
      }

      const jobOffer = new JobOffer({
        jobTitle: jobTitle,
        logo: req.file.filename,
        jobDescription: jobDescription,
        salary: salary,
        link: link,
      });
      console.log(jobOffer.jobTitle);
      const v = await jobOffer.save();
      console.log(v);

      res
        .status(200)
        .json({ message: "Job offer created successfully", data: v });
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
};

module.exports = {
  createJobOffer: upload.single("file"),
  handleCreateJobOffer: jobOfferControllar.createJobOffer,
  getAllJobOffers: jobOfferControllar.getAllJobOffers,
};
