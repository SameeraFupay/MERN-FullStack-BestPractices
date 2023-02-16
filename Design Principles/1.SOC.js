import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default Counter;


// data.js
const data = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Jim' },
  ];
  
  module.exports = data;
  
  // router.js
  const express = require('express');
  const data = require('./data');
  
  const router = express.Router();
  
  router.get('/', (req, res) => {
    res.json(data);
  });
  
  module.exports = router;
  
  // server.js
  const express = require('express');
  const router = require('./router');
  
  const app = express();
  
  app.use('/api', router);
  
  app.listen(3000, () => {
    console.log('Server started on port 3000');
  });