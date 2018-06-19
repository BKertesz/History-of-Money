const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const itemRouter = require('./items_router.js');

MongoClient.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017', (err, client) => {
  const dbName = process.env.MONGODB_URI ? 'heroku_cr2tj6df' : 'numismatics'
  const db = client.db(dbName);
  const itemsCollection = db.collection('items');
  router.use('/api/items', itemRouter(itemsCollection));
});

module.exports = router;
