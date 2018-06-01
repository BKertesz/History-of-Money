const express = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;

const itemRouter = function(itemsCollection){
  router.get('/', (req, res) => {
    console.log("hello world!");
  })

  return router;
}

module.exports = itemRouter;
