const joi = require("joi");

const authSchema = joi.object({
  name: joi.string().required(),
  roll: joi.number().integer(),
  gender: joi.string().required(),
  age: joi.number().integer().min(5),
  class: joi.number().integer(),
  totalworkingdays: joi.number().integer(),
  noofdayspresent: joi.number().integer(),
});

module.exports = {
  authSchema,
};
