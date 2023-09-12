"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Items",
      [
        {
          name: "organic apples",
          description: "",
          price: 1033,
          priceType: "1KG",
          tags: "[]",
          imageUrl: "http://dummyimage.com/146x100.png/5fa2dd/ffffff",
          category: "Almacen",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "gluten-free bread",
          description: "",
          price: 1749,
          priceType: "1KG",
          tags: "[]",
          imageUrl: "http://dummyimage.com/101x100.png/5fa2dd/ffffff",
          category: "Almacen",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "vegan cheese",
          description: "",
          price: 833,
          priceType: "1KG",
          tags: '["Oferta"]',
          imageUrl: "http://dummyimage.com/159x100.png/ff4444/ffffff",
          category: "Congelados",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia seeds",
          description: "",
          price: 683,
          priceType: "100G",
          tags: "[]",
          imageUrl: "http://dummyimage.com/151x100.png/5fa2dd/ffffff",
          category: "Frutas",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "coconut milk",
          description: "",
          price: 1869,
          priceType: "¼KG",
          tags: "[]",
          imageUrl: "http://dummyimage.com/126x100.png/ff4444/ffffff",
          category: "Bebidas",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "kale",
          description: "",
          price: 633,
          priceType: "¼KG",
          tags: "[]",
          imageUrl: "http://dummyimage.com/147x100.png/5fa2dd/ffffff",
          category: "Bebidas",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "quinoa",
          description: "",
          price: 305,
          priceType: "1KG",
          tags: "[]",
          imageUrl: "http://dummyimage.com/237x100.png/5fa2dd/ffffff",
          category: "Bebidas",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "almond butter",
          description: "",
          price: 693,
          priceType: "100G",
          tags: "[]",
          imageUrl: "http://dummyimage.com/182x100.png/dddddd/000000",
          category: "Frutas",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "hummus",
          description: "",
          price: 525,
          priceType: "U",
          tags: '["Oferta"]',
          imageUrl: "http://dummyimage.com/250x100.png/5fa2dd/ffffff",
          category: "Verduras",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "tofu",
          description: "",
          price: 732,
          priceType: "100G",
          tags: '["Oferta"]',
          imageUrl: "http://dummyimage.com/196x100.png/ff4444/ffffff",
          category: "Congelados",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "mushrooms",
          description: "",
          price: 1215,
          priceType: "U",
          tags: '["Oferta"]',
          imageUrl: "http://dummyimage.com/238x100.png/ff4444/ffffff",
          category: "Congelados",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia pudding",
          description: "",
          price: 404,
          priceType: "¼KG",
          tags: "[]",
          imageUrl: "http://dummyimage.com/230x100.png/5fa2dd/ffffff",
          category: "Frutas",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia bars",
          description: "",
          price: 1429,
          priceType: "½KG",
          tags: "[]",
          imageUrl: "http://dummyimage.com/171x100.png/5fa2dd/ffffff",
          category: "Almacen",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia flour",
          description: "",
          price: 890,
          priceType: "¼KG",
          tags: "[]",
          imageUrl: "http://dummyimage.com/181x100.png/ff4444/ffffff",
          category: "Frutas",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia oil",
          description: "",
          price: 1250,
          priceType: "1KG",
          tags: "[]",
          imageUrl: "http://dummyimage.com/211x100.png/5fa2dd/ffffff",
          category: "Verduras",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia drinks",
          description: "",
          price: 513,
          priceType: "100G",
          tags: "[]",
          imageUrl: "http://dummyimage.com/204x100.png/cc0000/ffffff",
          category: "Congelados",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia cereal",
          description: "",
          price: 633,
          priceType: "¼KG",
          tags: '["Oferta"]',
          imageUrl: "http://dummyimage.com/136x100.png/ff4444/ffffff",
          category: "Congelados",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia granola",
          description: "",
          price: 965,
          priceType: "1KG",
          tags: "[]",
          imageUrl: "http://dummyimage.com/183x100.png/5fa2dd/ffffff",
          category: "Bebidas",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia crackers",
          description: "",
          price: 437,
          priceType: "¼KG",
          tags: '["Oferta"]',
          imageUrl: "http://dummyimage.com/194x100.png/dddddd/000000",
          category: "Verduras",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia wraps",
          description: "",
          price: 136,
          priceType: "100G",
          tags: '["Oferta"]',
          imageUrl: "http://dummyimage.com/225x100.png/cc0000/ffffff",
          category: "Verduras",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia chips",
          description: "",
          price: 150,
          priceType: "U",
          tags: "[]",
          imageUrl: "http://dummyimage.com/230x100.png/ff4444/ffffff",
          category: "Verduras",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia pasta",
          description: "",
          price: 1927,
          priceType: "U",
          tags: "[]",
          imageUrl: "http://dummyimage.com/141x100.png/ff4444/ffffff",
          category: "Dietetica",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia cookies",
          description: "",
          price: 1082,
          priceType: "½KG",
          tags: "[]",
          imageUrl: "http://dummyimage.com/103x100.png/cc0000/ffffff",
          category: "Dietetica",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia jam",
          description: "",
          price: 689,
          priceType: "100G",
          tags: "[]",
          imageUrl: "http://dummyimage.com/197x100.png/cc0000/ffffff",
          category: "Frutas",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia smoothies",
          description: "",
          price: 1829,
          priceType: "100G",
          tags: '["Oferta"]',
          imageUrl: "http://dummyimage.com/109x100.png/5fa2dd/ffffff",
          category: "Frutas",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia protein powder",
          description: "",
          price: 526,
          priceType: "U",
          tags: "[]",
          imageUrl: "http://dummyimage.com/158x100.png/5fa2dd/ffffff",
          category: "Almacen",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia energy bars",
          description: "",
          price: 1030,
          priceType: "U",
          tags: '["Oferta"]',
          imageUrl: "http://dummyimage.com/236x100.png/cc0000/ffffff",
          category: "Frutas",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia muffins",
          description: "",
          price: 1883,
          priceType: "U",
          tags: '["Oferta"]',
          imageUrl: "http://dummyimage.com/187x100.png/cc0000/ffffff",
          category: "Verduras",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia pancakes",
          description: "",
          price: 438,
          priceType: "U",
          tags: "[]",
          imageUrl: "http://dummyimage.com/241x100.png/cc0000/ffffff",
          category: "Congelados",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia waffles",
          description: "",
          price: 1453,
          priceType: "U",
          tags: "[]",
          imageUrl: "http://dummyimage.com/214x100.png/ff4444/ffffff",
          category: "Almacen",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia bread",
          description: "",
          price: 568,
          priceType: "¼KG",
          tags: "[]",
          imageUrl: "http://dummyimage.com/124x100.png/dddddd/000000",
          category: "Congelados",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia pizza crust",
          description: "",
          price: 1043,
          priceType: "U",
          tags: '["Oferta"]',
          imageUrl: "http://dummyimage.com/136x100.png/5fa2dd/ffffff",
          category: "Frutas",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia tortillas",
          description: "",
          price: 116,
          priceType: "100G",
          tags: "[]",
          imageUrl: "http://dummyimage.com/129x100.png/5fa2dd/ffffff",
          category: "Almacen",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia soup",
          description: "",
          price: 1442,
          priceType: "½KG",
          tags: "[]",
          imageUrl: "http://dummyimage.com/158x100.png/dddddd/000000",
          category: "Verduras",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia salad dressing",
          description: "",
          price: 1196,
          priceType: "100G",
          tags: '["Oferta"]',
          imageUrl: "http://dummyimage.com/125x100.png/cc0000/ffffff",
          category: "Dietetica",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia salsa",
          description: "",
          price: 159,
          priceType: "100G",
          tags: "[]",
          imageUrl: "http://dummyimage.com/230x100.png/dddddd/000000",
          category: "Frutas",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia guacamole",
          description: "",
          price: 836,
          priceType: "U",
          tags: '["Oferta"]',
          imageUrl: "http://dummyimage.com/190x100.png/cc0000/ffffff",
          category: "Congelados",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia hummus",
          description: "",
          price: 1106,
          priceType: "½KG",
          tags: "[]",
          imageUrl: "http://dummyimage.com/102x100.png/5fa2dd/ffffff",
          category: "Congelados",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia pesto",
          description: "",
          price: 750,
          priceType: "1KG",
          tags: '["Oferta"]',
          imageUrl: "http://dummyimage.com/150x100.png/dddddd/000000",
          category: "Bebidas",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia tzatziki",
          description: "",
          price: 502,
          priceType: "U",
          tags: "[]",
          imageUrl: "http://dummyimage.com/213x100.png/cc0000/ffffff",
          category: "Congelados",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia dip",
          description: "",
          price: 1038,
          priceType: "1KG",
          tags: '["Oferta"]',
          imageUrl: "http://dummyimage.com/181x100.png/ff4444/ffffff",
          category: "Verduras",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia ice cream",
          description: "",
          price: 1314,
          priceType: "¼KG",
          tags: '["Oferta"]',
          imageUrl: "http://dummyimage.com/203x100.png/dddddd/000000",
          category: "Bebidas",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia yogurt",
          description: "",
          price: 1390,
          priceType: "¼KG",
          tags: "[]",
          imageUrl: "http://dummyimage.com/188x100.png/ff4444/ffffff",
          category: "Verduras",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia milk",
          description: "",
          price: 664,
          priceType: "U",
          tags: "[]",
          imageUrl: "http://dummyimage.com/116x100.png/dddddd/000000",
          category: "Dietetica",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia tea",
          description: "",
          price: 103,
          priceType: "100G",
          tags: "[]",
          imageUrl: "http://dummyimage.com/157x100.png/cc0000/ffffff",
          category: "Verduras",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia coffee",
          description: "",
          price: 738,
          priceType: "½KG",
          tags: "[]",
          imageUrl: "http://dummyimage.com/167x100.png/cc0000/ffffff",
          category: "Dietetica",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia lemonade",
          description: "",
          price: 1128,
          priceType: "½KG",
          tags: "[]",
          imageUrl: "http://dummyimage.com/223x100.png/dddddd/000000",
          category: "Bebidas",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia juice",
          description: "",
          price: 274,
          priceType: "½KG",
          tags: '["Oferta"]',
          imageUrl: "http://dummyimage.com/181x100.png/cc0000/ffffff",
          category: "Congelados",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia water",
          description: "",
          price: 290,
          priceType: "1KG",
          tags: "[]",
          imageUrl: "http://dummyimage.com/187x100.png/5fa2dd/ffffff",
          category: "Bebidas",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia beer",
          description: "",
          price: 1585,
          priceType: "1KG",
          tags: "[]",
          imageUrl: "http://dummyimage.com/219x100.png/dddddd/000000",
          category: "Dietetica",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia wine",
          description: "",
          price: 1629,
          priceType: "½KG",
          tags: "[]",
          imageUrl: "http://dummyimage.com/146x100.png/cc0000/ffffff",
          category: "Frutas",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia cocktails",
          description: "",
          price: 1134,
          priceType: "¼KG",
          tags: "[]",
          imageUrl: "http://dummyimage.com/147x100.png/ff4444/ffffff",
          category: "Frutas",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia shots",
          description: "",
          price: 728,
          priceType: "100G",
          tags: '["Oferta"]',
          imageUrl: "http://dummyimage.com/243x100.png/dddddd/000000",
          category: "Almacen",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia supplements",
          description: "",
          price: 1627,
          priceType: "U",
          tags: "[]",
          imageUrl: "http://dummyimage.com/195x100.png/dddddd/000000",
          category: "Frutas",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia vitamins",
          description: "",
          price: 256,
          priceType: "½KG",
          tags: "[]",
          imageUrl: "http://dummyimage.com/148x100.png/cc0000/ffffff",
          category: "Bebidas",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia skincare",
          description: "",
          price: 562,
          priceType: "100G",
          tags: '["Oferta"]',
          imageUrl: "http://dummyimage.com/172x100.png/ff4444/ffffff",
          category: "Dietetica",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia haircare",
          description: "",
          price: 722,
          priceType: "½KG",
          tags: "[]",
          imageUrl: "http://dummyimage.com/175x100.png/ff4444/ffffff",
          category: "Congelados",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia body lotion",
          description: "",
          price: 1649,
          priceType: "100G",
          tags: "[]",
          imageUrl: "http://dummyimage.com/241x100.png/cc0000/ffffff",
          category: "Frutas",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia soap",
          description: "",
          price: 1361,
          priceType: "1KG",
          tags: "[]",
          imageUrl: "http://dummyimage.com/185x100.png/dddddd/000000",
          category: "Bebidas",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia lip balm",
          description: "",
          price: 1336,
          priceType: "100G",
          tags: "[]",
          imageUrl: "http://dummyimage.com/179x100.png/5fa2dd/ffffff",
          category: "Almacen",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia candles",
          description: "",
          price: 948,
          priceType: "1KG",
          tags: '["Oferta"]',
          imageUrl: "http://dummyimage.com/145x100.png/5fa2dd/ffffff",
          category: "Bebidas",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia potpourri",
          description: "",
          price: 541,
          priceType: "U",
          tags: "[]",
          imageUrl: "http://dummyimage.com/120x100.png/ff4444/ffffff",
          category: "Congelados",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia air freshener",
          description: "",
          price: 1504,
          priceType: "½KG",
          tags: '["Oferta"]',
          imageUrl: "http://dummyimage.com/195x100.png/5fa2dd/ffffff",
          category: "Congelados",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia cleaning products",
          description: "",
          price: 892,
          priceType: "½KG",
          tags: "[]",
          imageUrl: "http://dummyimage.com/190x100.png/ff4444/ffffff",
          category: "Dietetica",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia laundry detergent",
          description: "",
          price: 1919,
          priceType: "U",
          tags: "[]",
          imageUrl: "http://dummyimage.com/137x100.png/ff4444/ffffff",
          category: "Congelados",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia dish soap",
          description: "",
          price: 1156,
          priceType: "100G",
          tags: '["Oferta"]',
          imageUrl: "http://dummyimage.com/240x100.png/dddddd/000000",
          category: "Congelados",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia hand soap",
          description: "",
          price: 752,
          priceType: "U",
          tags: "[]",
          imageUrl: "http://dummyimage.com/245x100.png/ff4444/ffffff",
          category: "Verduras",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia paper towels",
          description: "",
          price: 1477,
          priceType: "U",
          tags: "[]",
          imageUrl: "http://dummyimage.com/149x100.png/dddddd/000000",
          category: "Verduras",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia toilet paper",
          description: "",
          price: 1442,
          priceType: "1KG",
          tags: '["Oferta"]',
          imageUrl: "http://dummyimage.com/163x100.png/5fa2dd/ffffff",
          category: "Verduras",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia trash bags",
          description: "",
          price: 1767,
          priceType: "¼KG",
          tags: "[]",
          imageUrl: "http://dummyimage.com/134x100.png/dddddd/000000",
          category: "Almacen",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia reusable bags",
          description: "",
          price: 1160,
          priceType: "1KG",
          tags: "[]",
          imageUrl: "http://dummyimage.com/214x100.png/cc0000/ffffff",
          category: "Congelados",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia water bottles",
          description: "",
          price: 1830,
          priceType: "¼KG",
          tags: '["Oferta"]',
          imageUrl: "http://dummyimage.com/190x100.png/dddddd/000000",
          category: "Almacen",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia lunch boxes",
          description: "",
          price: 976,
          priceType: "1KG",
          tags: "[]",
          imageUrl: "http://dummyimage.com/149x100.png/dddddd/000000",
          category: "Frutas",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia food containers",
          description: "",
          price: 645,
          priceType: "¼KG",
          tags: "[]",
          imageUrl: "http://dummyimage.com/119x100.png/cc0000/ffffff",
          category: "Dietetica",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia kitchen utensils",
          description: "",
          price: 787,
          priceType: "½KG",
          tags: "[]",
          imageUrl: "http://dummyimage.com/250x100.png/dddddd/000000",
          category: "Frutas",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia cutting boards",
          description: "",
          price: 710,
          priceType: "100G",
          tags: "[]",
          imageUrl: "http://dummyimage.com/149x100.png/dddddd/000000",
          category: "Verduras",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia cookbooks",
          description: "",
          price: 1711,
          priceType: "1KG",
          tags: "[]",
          imageUrl: "http://dummyimage.com/128x100.png/ff4444/ffffff",
          category: "Frutas",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia aprons",
          description: "",
          price: 1026,
          priceType: "100G",
          tags: "[]",
          imageUrl: "http://dummyimage.com/183x100.png/ff4444/ffffff",
          category: "Dietetica",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia oven mitts",
          description: "",
          price: 331,
          priceType: "100G",
          tags: "[]",
          imageUrl: "http://dummyimage.com/117x100.png/cc0000/ffffff",
          category: "Dietetica",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia pot holders",
          description: "",
          price: 1802,
          priceType: "¼KG",
          tags: '["Oferta"]',
          imageUrl: "http://dummyimage.com/121x100.png/ff4444/ffffff",
          category: "Frutas",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia dish towels",
          description: "",
          price: 1881,
          priceType: "100G",
          tags: "[]",
          imageUrl: "http://dummyimage.com/174x100.png/ff4444/ffffff",
          category: "Frutas",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia tablecloths",
          description: "",
          price: 1633,
          priceType: "1KG",
          tags: "[]",
          imageUrl: "http://dummyimage.com/233x100.png/dddddd/000000",
          category: "Dietetica",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia placemats",
          description: "",
          price: 543,
          priceType: "½KG",
          tags: "[]",
          imageUrl: "http://dummyimage.com/223x100.png/cc0000/ffffff",
          category: "Dietetica",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia napkins",
          description: "",
          price: 1129,
          priceType: "½KG",
          tags: "[]",
          imageUrl: "http://dummyimage.com/124x100.png/ff4444/ffffff",
          category: "Congelados",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia coasters",
          description: "",
          price: 520,
          priceType: "¼KG",
          tags: "[]",
          imageUrl: "http://dummyimage.com/167x100.png/cc0000/ffffff",
          category: "Bebidas",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia mugs",
          description: "",
          price: 619,
          priceType: "100G",
          tags: '["Oferta"]',
          imageUrl: "http://dummyimage.com/234x100.png/dddddd/000000",
          category: "Frutas",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia plates",
          description: "",
          price: 1787,
          priceType: "U",
          tags: "[]",
          imageUrl: "http://dummyimage.com/250x100.png/cc0000/ffffff",
          category: "Congelados",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia bowls",
          description: "",
          price: 583,
          priceType: "1KG",
          tags: '["Oferta"]',
          imageUrl: "http://dummyimage.com/167x100.png/ff4444/ffffff",
          category: "Almacen",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia glasses",
          description: "",
          price: 1612,
          priceType: "1KG",
          tags: "[]",
          imageUrl: "http://dummyimage.com/237x100.png/5fa2dd/ffffff",
          category: "Dietetica",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia silverware",
          description: "",
          price: 711,
          priceType: "1KG",
          tags: '["Oferta"]',
          imageUrl: "http://dummyimage.com/134x100.png/dddddd/000000",
          category: "Dietetica",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia serving dishes",
          description: "",
          price: 939,
          priceType: "100G",
          tags: "[]",
          imageUrl: "http://dummyimage.com/225x100.png/dddddd/000000",
          category: "Dietetica",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia vases",
          description: "",
          price: 1994,
          priceType: "1KG",
          tags: "[]",
          imageUrl: "http://dummyimage.com/123x100.png/5fa2dd/ffffff",
          category: "Almacen",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia picture frames",
          description: "",
          price: 1230,
          priceType: "100G",
          tags: '["Oferta"]',
          imageUrl: "http://dummyimage.com/141x100.png/ff4444/ffffff",
          category: "Almacen",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia candles holders",
          description: "",
          price: 846,
          priceType: "100G",
          tags: "[]",
          imageUrl: "http://dummyimage.com/181x100.png/5fa2dd/ffffff",
          category: "Almacen",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia rugs",
          description: "",
          price: 1070,
          priceType: "U",
          tags: "[]",
          imageUrl: "http://dummyimage.com/120x100.png/5fa2dd/ffffff",
          category: "Frutas",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia pillows",
          description: "",
          price: 741,
          priceType: "U",
          tags: "[]",
          imageUrl: "http://dummyimage.com/100x100.png/dddddd/000000",
          category: "Almacen",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia blankets",
          description: "",
          price: 1320,
          priceType: "¼KG",
          tags: "[]",
          imageUrl: "http://dummyimage.com/234x100.png/cc0000/ffffff",
          category: "Dietetica",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia curtains",
          description: "",
          price: 406,
          priceType: "100G",
          tags: "[]",
          imageUrl: "http://dummyimage.com/158x100.png/cc0000/ffffff",
          category: "Verduras",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia lamps",
          description: "",
          price: 906,
          priceType: "U",
          tags: "[]",
          imageUrl: "http://dummyimage.com/168x100.png/ff4444/ffffff",
          category: "Dietetica",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
        {
          name: "chia wall art",
          description: "",
          price: 1913,
          priceType: "¼KG",
          tags: '["Oferta"]',
          imageUrl: "http://dummyimage.com/123x100.png/5fa2dd/ffffff",
          category: "Verduras",
          createdAt: new Date(),
          updatedAt: new Date(),
          inStock: true,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', '[]', {});
     */
  },
};
