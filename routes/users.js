const express = require('express');
const Sync = require('../models/Sync');
const router = express.Router();
const User = require('../models/User');

//Routes
//Get back all the user
router.get('/', async (req, res) => {
  const { username } = req.query;
  const filter = username ? { name: username } : {};
  try {
    const users = await User.find(filter).exec();
    res.json(users);
  }
  catch (err) {
    res.json({ message: err });
  }
});

//Routes
//Check is sync
router.get('/is-sync', async (req, res) => {
  const { userId } = req.query;
  const filter = userId ? { userId } : {};
  try {
    const user = await Sync.findOne(filter).exec();
    const {isSync} = user;
    res.json({ isSync });
  }
  catch (err) {
    res.json({ message: err });
  }
});

//Add a user
router.post('/', async (req, res) => {
  const user = new User({
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    product: req.body.product,
    customerId: req.body.customerId,
    quantity: req.body.quantity,
    price: req.body.price
  });

  try {
    const createNewUser = await user.save();
    res.json(createNewUser);
  }
  catch (err) {
    res.json({ message: err });
  }
});

// Update user sync
router.post('/toggle-sync', async (req, res) => {
  const { userId } = req.query;
  try {
    const userSync = await Sync.findOne({userId}).exec();
    const isSync = userSync.isSync;
    const result = await Sync.findOneAndUpdate({userId}, {$set:{isSync: !isSync}}).exec();
    res.json(result);
  }
  catch (err) {
    res.json({ message: err });
  }
});

//Specific user
router.get('/:postId', async (req, res) => {
  try {
    const user = await User.findById(req.params.postId);
    res.json(user);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;

