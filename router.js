const express = require("express");
const router = express.Router();
const taskData = require("./model");

router.get("/", async (req, res) => {
  const newData = await taskData.find();
  res.status(200).json(newData);
});

router.get("/:id", async (req, res) => {
  const newData = await taskData.findById(req.params.id);
  res.status(200).json(newData);
});

router.post("/", async (req, res) => {
  const newData = await taskData.create(req.body);
  res.status(200).json(newData);
});

router.patch("/:id", async (req, res) => {
  const newData = await taskData.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(newData);
});
router.delete("/:id", async (req, res) => {
  const newData = await taskData.findByIdAndDelete(req.params.id);
  res.status(200).send("Deleted");
});

module.exports = router;
