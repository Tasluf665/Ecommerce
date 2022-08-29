const { Category, validate } = require("../models/category");
const _ = require("lodash");

module.exports.createCategory = async (req, res) => {
  const { error } = validate(_.pick(req.body, ["name"]));
  if (error) return res.status(400).send({ error: error.details[0].message });

  const category = new Category(_.pick(req.body, ["name"]));
  const result = await category.save();

  return res.status(201).send({
    success: "Category added Successfully!",
    data: { name: result.name },
  });
};

module.exports.getCategories = async (req, res) => {
  const categories = await Category.find()
    .select({ _id: 1, name: 1 })
    .sort({ name: 1 });

  return res.status(200).send({
    success: "Category Fetched Successfully!",
    data: categories,
  });
};
