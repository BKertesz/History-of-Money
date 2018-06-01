const express = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;

const itemRouter = function(itemsCollection){
  router.get('/', (req, res) => {
    itemsCollection
    .find()
    .toArray()
    .then((docs) => res.json(docs));
  })

  return router;
}



module.exports = itemRouter;
