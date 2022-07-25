const express = require('express');
const router = express.Router();
const User = require('../models/User');

//Routes
//Get back all the user
router.get('/', async (req, res) => {
  try{
    const users = await User.find();
    res.json(users);
    }
    catch(err) {
      res.json({message: err});
    }
});

//Add a user
router.post('/', async (req, res) => {
  const user = new User ({
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    product: req.body.product,
    customerId: req.body.customerId,
    quantity: req.body.quantity,
    price: req.body.price
  });

  try{
  const createNewUser = await user.save();
  res.json(createNewUser);
  }
  catch(err) {
    res.json({message: err});
  }
});

//Specific user
router.get('/:postId', async (req, res) => {
  try{
    const user = await User.findById(req.params.postId);
    res.json(post);
  }catch {
    res.json({message: err});
  }
});

//Delete user
//cId = customerId
// router.delete('/:cId', async (req, res) => {
//   try {
//     const removedUser = await User.remove({_customerId: req.params.cId});
//     res.json(removedUser);
//   }catch (err){
//     res.json({message: err});
//   }
// });

//Update a patch
router.patch('/:postId', async (req, res) => {
  try {
    const modifyUser = await User.updateOne(
      {_id: req.params.postId},
      {$set: {name: req.body.name}},
      {$set: {phoneNumber: req.body.phoneNumber}},
      {$set: {email: req.body.email}},
      {$set: {product: req.body.product}},
      {$set: {customerId: req.body.customerId}},
      {$set: {quantity: req.body.quantity}},
      {$set: {price: req.body.price}}
      );
    res.json(modifyUser);
  }catch (err){
    res.json({message: err});
  }
});

module.exports = router;

