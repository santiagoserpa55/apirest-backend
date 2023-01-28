const express = require('express');
const Model = require('../models/model');
const router = express.Router();
const path = require('path');
const { insertMany } = require('../models/model');
//Post Method

router.get(``, async (req, res) => {
  const data = new Model({
    name: req.query.name,
    kill: req.query.name,
  })
  if (data.name !== undefined) {
    try {
      const dataToSave = await data.save();
      //res.status(200).send(dataToSave)
      res.sendFile(path.join(__dirname, '../index.html'));
    }
    catch (error) {
      res.status(400).json({ message: error.message })
    }
  } else if (req.query.kill === '') {
    const data = await Model.collection.drop()
    Model.collection.insertOne({
      "name": "Paul Herrick",
    })
    res.sendFile(path.join(__dirname, '../index.html'));
  } else {
   res.sendFile(path.join(__dirname, '../index.html'));
  }
}) 


//Get all Method
router.get('/getAll', async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data)
  }
  catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router;