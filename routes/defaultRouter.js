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

router.post("/", async (req, res) => {
  const zoo = req.body;
  console.log(zoo);
  try {
    if (zoo.name != "") {
      const [id] = await db.addZoo(zoo);
      res.status(201).json({ id: id });
    } else {
      res.status(400).json({ error: "The name must not be empty" });
    }
  } catch (err) {
    const { errno } = err;
    errno == 19
      ? res.status(400).json({ error: "The name must be unique" })
      : res.status(500).jsont({ error: "Can not post to database" });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const thezoo = await db.deleteZoo(id);
    thezoo
      ? res.status(200).json({ message: "success" })
      : res.status(400).json({ error: "The requested zoo does not exist" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { name } = req.body;
  try {
    const thezoo = await db.updateZoo(id, name);
    thezoo
      ? res.status(200).json({ message: "success" })
      : res.status(400).json({ error: "The request zoo does not exist" });
  } catch {
    res.status(500).json({ err: "error" });
  }
});

module.exports = router;
