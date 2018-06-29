var express = require('express');
var router = express.Router();
const {Subject} = require('../db/schema')

/* GET subject listing. */
router.get('/', function(req, res, next) {
  Subject.find().then((subjects) => {
    res.json({
      subjects
    })
  })
})

router.get('/:id', (req, res) => {
  Subject.findById(req.params.id).then((subject) => {
    res.send({subject})
  })
})

router.post('/', (req, res) => {
  const newSubject = new Subject(req.body)
  newSubject.save().then((subject) => {
    res.send(subject)
  })
})

router.delete('/:id', (req, res) => {
  const subjectId = req.params.id
  Subject.findByIdAndRemove(subjectId).then((subject) => {
    res.json(subject)
  })
})

module.exports = router;
