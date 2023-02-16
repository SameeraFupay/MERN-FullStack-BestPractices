const express = require('express');
const NodeCache = require('node-cache');
const app = express();

// Create a new cache with a TTL of 10 seconds
const cache = new NodeCache({ stdTTL: 10 });

// Define a route that retrieves data from a slow data source
app.get('/data', async (req, res) => {
  const key = 'data';
  let data = cache.get(key);
  if (data) {
    console.log('Retrieved data from cache');
    return res.json(data);
  }
  console.log('Retrieved data from slow data source');
  data = await retrieveDataFromSlowDataSource();
  cache.set(key, data);
  return res.json(data);
});

// Helper function that simulates retrieving data from a slow data source
function retrieveDataFromSlowDataSource() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ foo: 'bar' });
    }, 5000);
  });
}

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});