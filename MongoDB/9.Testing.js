const assert = require('chai').assert;
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/mydb';

describe('Database Operations', function() {
  let client;
  let db;
  
  before(async function() {
    client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    db = client.db('mydb');
  });
  
  after(function() {
    client.close();
  });
  
  it('should insert a document into the collection', async function() {
    const collection = db.collection('mycollection');
    const document = { name: 'John Doe', email: 'johndoe@example.com' };
    const result = await collection.insertOne(document);
    assert.equal(result.insertedCount, 1);
  });
  
  it('should find a document in the collection', async function() {
    const collection = db.collection('mycollection');
    const document = { name: 'John Doe', email: 'johndoe@example.com' };
    const result = await collection.findOne(document);
    assert.equal(result.name, 'John Doe');
  });
  
  it('should update a document in the collection', async function() {
    const collection = db.collection('mycollection');
    const filter = { name: 'John Doe' };
    const update = { $set: { email: 'johndoe2@example.com' } };
    const result = await collection.updateOne(filter, update);
    assert.equal(result.modifiedCount, 1);
  });
  
  it('should delete a document from the collection', async function() {
    const collection = db.collection('mycollection');
    const filter = { name: 'John Doe' };
    const result = await collection.deleteOne(filter);
    assert.equal(result.deletedCount, 1);
  });
});