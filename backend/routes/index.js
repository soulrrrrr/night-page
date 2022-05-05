var express = require('express');
var router = express.Router();

const users = new Map();
var ANSWER = [];

var validId = (id) => {
  const NCTU = new RegExp('^0[0-9]{3}[0-2][0-9]{2}$');
  const NYCU = new RegExp('1[0,1][0,9][0-9]{6}');
  return (NCTU.test(id) || NYCU.test(id));
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', function(req, res, next) {
  const loginData = {
    id: req.body.id,
  }
  console.log(req.body.id);
  if (validId(loginData.id)) {
    if (users.has(loginData.id)) {
      res.send("Welcome back");
    }
    else {
      users.set(loginData.id, {
        ans: [],
      });
      res.send("Hi new friend!");
    }
  }
  else {
    res.send(String(users.size));
  }

  //res.send('respond with a resource');
});

router.post('/sendans', function(req, res, next) {
  const ansData = {
    id: req.body.id,
    ans: req.body.ans.split(","),
  }
  console.log(ansData.ans);
  if (ansData.ans.length >= 5) {
    users.set(ansData.id, {ans: ansData.ans});
    res.send(users.get(ansData.id));
  }
  else {
    res.send("too short ans");
  }

  //res.send('respond with a resource');
});
module.exports = router;
