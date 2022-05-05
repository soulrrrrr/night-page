var express = require('express');
var router = express.Router();
const users = new Map();

router.post('/', function(req, res, next) {
  const loginData = {
    id: req.body.id,
  }
  console.log(req.body.id);
  if (validId(loginData.id)) {
    console.log(users.has(loginData.id));
    if (users.has(loginData.id)) {
      res.send("Welcome back");
    }
    else {
      users.set(loginData.id, {ans: []});
      res.send("Hi new friend!");
    }
  }
  else {
    res.send(String(users.size));
  }

  //res.send('respond with a resource');
});

module.exports = router;
