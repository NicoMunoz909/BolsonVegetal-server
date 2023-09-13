"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Item.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: { notEmpty: true },
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        validate: { notEmpty: true },
      },
      price: { type: DataTypes.FLOAT, allowNull: false },
      priceType: {
        type: DataTypes.STRING,
        validate: { isIn: [["100G", "¼KG", "½KG", "KG", "U"]] },
        allowNull: false,
      },
      tags: DataTypes.JSON,
      imageUrl: { type: DataTypes.STRING, validate: { isUrl: true } },
      category: { type: DataTypes.STRING, allowNull: false },
      inStock: { type: DataTypes.BOOLEAN },
    },
    {
      sequelize,
      modelName: "Item",
    }
  );
  return Item;
};
