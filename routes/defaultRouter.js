const express = require("express");
const db = require("../data/zoos_actions.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const thezoos = await db.get();
    res.status(200).json(thezoos);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = router;
