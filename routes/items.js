const express = require("express");
const controller = require("../controllers/items");

const router = express.Router();
const { getAll, getById, createItem, updateItem, deleteItem } = controller;

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", createItem);
router.patch("/:id", updateItem);
router.delete("/:id", deleteItem);

module.exports = router;
