const joi = require("joi");

const authSchema = joi.object({
  Name: joi.string().required(),
  Roll: joi.number().integer(),
  gender: joi.string().required(),
  age: joi.number().integer().min(5),
  class: joi.number().integer().min(1).max(10),
  totalworkingdays: joi.number().integer(),
  noofdayspresent: joi.number().integer(),
});

module.exports = {
  authSchema,
};
