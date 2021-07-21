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
  try {
    const display = await console.log(req.body);

    const show = await User.findOne({ roll: req.body.roll });
    console.log(show);

    if (show == null)
      throw createHttpError.BadRequest(
        `${req.body.roll} is not present in your class`
      );
    res.send(show);
    const result = Math.round(
      (show.noofdayspresent / show.totalworkingdays) * 100
    );
    console.log(`you have the attendence percentage ${result}`);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
