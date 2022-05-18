var express = require('express');
var router = express.Router();

var users = {}
var answers = ["C", "B", "A", "D", "A", "C", "D", "D", "B", "A", "A", "C", "B", "C", "B", "A", "B", "D", "D", "C"]
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

var compare = (a, b) => {
  if (a.score < b.score)
    return -1;
  return 1;
}

var getScore = (ans) => {
  let score = 0;
  for (let i = 0; i < ans.length; i++) {
    if (ans[i] == answers[i])
      score++;
  }
  return score;
}


// /* admin post questions */
// router.post('/setQuestion', function (req, res, next) {
//   try {
//     let obj = req.body;
//     questions = obj;
//     res.send('success');
//   } catch (err) {
//     console.log(err);
//     res.send('failed');
//   }
// });

// /* admin get all users' answers */
// router.get('/allAnswers', function (req, res, next) {
//   try {
//     res.send(users);
//   } catch (err) {
//     res.send('failed');
//   }
// });

// /* client get user's answer */
// router.get('/userAnswers', function (req, res, next) {
//   try {
//     const id = req.body.id;
//     res.send(users[id]);
//   } catch (err) {
//     res.send({});
//   }
// });

/* client post answers */
router.post('/answer', function (req, res, next) {
  console.log("answer in!");
  try {
    const ansObj = req.body;
    const score = getScore(ansObj.ans);
    users[ansObj.id] = {
      nickname: ansObj.nickname,
      score: score,
    };
    const sorted_users = Object.entries(users).sort(([, a], [, b]) => b.score - a.score)
    console.log("sorted:", sorted_users);
    res.send('success');
  } catch (err) {
    console.log(err);
    res.send('failed');
  }
});

/* admin get user's score */
router.get('/score', function (req, res, next) {
  try {
    const sorted = Object.fromEntries(
      Object.entries(users).sort(([, a], [, b]) => b.score - a.score)
    );
    console.log("sorted: ", sorted);
    res.json(sorted);
  } catch (err) {
    res.send({});
  }
});

module.exports = router;
