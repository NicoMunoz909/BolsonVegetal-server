const { Item } = require("../db/models");

const getAll = async (req, res) => {
  const data = await Item.findAll();
  res.send(data);
};

const getById = async (req, res) => {
  const item = await Item.findByPk(req.params.id);
  res.send(item);
};

const createItem = async (req, res) => {
  try {
    const item = await Item.create({ ...req.body });
    res.send(item);
  } catch (error) {
    res.send(error);
    console.log(error);
  }
};

const updateItem = async (req, res) => {
  try {
    const item = await Item.update({ ...req.body }, { where: { id: req.params.id } });
    res.send(item);
  } catch (error) {
    res.send(error);
  }
};

const deleteItem = async (req, res) => {
  try {
    const item = await Item.destroy({ where: { id: req.params.id } });
    res.send("Ok");
  } catch (error) {
    res.send(error);
  }
};

module.exports = { getAll, getById, createItem, updateItem, deleteItem };
