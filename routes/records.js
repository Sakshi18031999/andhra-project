const express = require("express");
const router = express.Router();
const Records = require("../models/Records");

router.post("/create", async (req, res) => {
  try {
    const { response } = req.body;
    const newRecord = new Records({ response });
    await newRecord.save();
    res.status(201).json({ message: "Record created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const records = await Records.find();
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/count", async (req, res) => {
    try {
      const count = await Records.countDocuments();
      res.json({ count });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

module.exports = router;
