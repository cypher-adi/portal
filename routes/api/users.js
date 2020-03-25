const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');

// Importing User Model
const User = require('../../models/User');

// @route  POST api/users
// @desc   Register User
// @access Public
router.post(
  '/',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Please input a valid email').isEmail(),
    check(
      'password',
      'Please enter a password of minimum 6 characters'
    ).isLength({ min: 6 }),
    check('college', 'college is required')
      .not()
      .isEmpty(),
    check('year', 'year is required')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, college, year } = req.body;

    try {
      // See if user exists
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exits' }] });
      }

      // Get users gravatar
      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm'
      });

      user = new User({
        name,
        email,
        avatar,
        password,
        college,
        year
      });

      // Encrpyt password

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      // Return jsonwebtoken

      res.send('User Registered');
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
