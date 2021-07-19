const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const jsonParser = bodyParser.json();
const User = require("../models/usermodels");
const createHttpError = require("http-errors");
const { authSchema } = require("../helpers/validation_schema");

router.post("/register", async (req, res, next) => {
  try {
    const result = await authSchema.validateAsync(req.body);
    console.log(result);

    const doesExist = await User.findOne({ roll: result.roll });

    if (doesExist)
      throw createHttpError.Conflict(`${result.roll} is already exist`);

    const user = new User(
      result
      // {
      // name: req.body.name,
      // roll: req.body.roll,
      // gender: req.body.gender,
      // age: req.body.age,
      // class: req.body.class,
      // totalworkingdays: req.body.totalworkingdays,
      // noofdayspresent: req.body.noofdayspresent,
      // }
    );
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (error) {
    if (error.isjoi === true) error.status = 422;
    next(error);
  }
});
router.get("/student-details", async (req, res, next) => {
  res.send("Here We can get Student Details");
});

module.exports = router;
