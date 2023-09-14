const express = require("express");
const controller = require("../controllers/items");
const validations = require("../validations/auth");

const router = express.Router();
const { getAll, getById, createItem, updateItem, deleteItem } = controller;
const { validateToken } = validations;

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", validateToken, createItem);
router.patch("/:id", validateToken, updateItem);
router.delete("/:id", validateToken, deleteItem);

module.exports = router;
