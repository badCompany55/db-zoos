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

router.get("/:id", async (req, res) => {
  try {
    const thezoo = await db.getById(req.params.id);
    thezoo
      ? res.status(200).json(thezoo)
      : res.status(400).json({ error: "The requested zoo does not exist" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = router;
