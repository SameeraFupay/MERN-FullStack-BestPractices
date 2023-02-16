// controllers/users.js
const getUsers = function (req, res) {
    res.json([{ name: 'John Doe' }, { name: 'Jane Doe' }]);
  };
  
  module.exports = {
    getUsers,
  };
  
  // routes/index.js
  const express = require('express');
  const router = express.Router();
  const usersController = require('../controllers/users');
  
  router.get('/users', usersController.getUsers);
  
  module.exports = router;
  
  // index.js
  const express = require('express');
  const app = express();
  const routes = require('./routes');
  
  app.use('/api', routes);
  
  app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });