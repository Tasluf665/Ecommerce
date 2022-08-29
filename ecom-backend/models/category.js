const Joi = require("joi");
const { Schema, model } = require("mongoose");

const categorySchema = Schema(
  {
    name: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

const validateUser = (user) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
  });

  return schema.validate(user);
};

module.exports.Category = model("Category", categorySchema);
module.exports.validate = validateUser;
