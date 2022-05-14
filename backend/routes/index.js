var express = require('express');
var router = express.Router();

var users = {}
var questions = new Array(20).fill({
  id: 0,
  title: "None",
  description: "none",
  answer: 0,
  can_answer: false,
});

var validId = (id) => {
  const NCTU = new RegExp('^0[0-9]{3}[0-2][0-9]{2}$');
  const NYCU = new RegExp('1[0,1][0,9][0-9]{6}');
  return (NCTU.test(id) || NYCU.test(id));
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* admin post questions */
router.post('/setQuestion', function(req, res, next) {
  try {
    let obj = req.body;
    questions = obj;
    res.send('success');
  } catch (err) {
    console.log(err);
    res.send('failed');
  }
});

/* admin get all users' answers */
router.get('/allAnswers', function(req, res, next) {
  try {
    res.send(users);
  } catch (err) {
    res.send('failed');
  }
});

/* client get user's answer */
router.get('/userAnswers', function(req, res, next) {
  try {
    const id = req.body.id;
    res.send(users[id]);
  } catch (err) {
    res.send({});
  }
});

/* client post answers */
router.post('/answer', function(req, res, next) {
  try {
    const ansObj = req.body;
    users[ansObj.id] = ansObj;
    console.log(users)
    res.send('success');
  } catch (err) {
    console.log(err);
    res.send('failed');
  }
});




module.exports = router;
