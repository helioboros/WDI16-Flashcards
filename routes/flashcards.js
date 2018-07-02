let express = require('express')
let router = express.Router({mergeParams: true})
const {Subject, Flashcard} = require('../db/schema')

router.post('/', function(req, res) {
    Subject.findById(req.params.subjectId).then((subject) => {
        const newFlashcard = new Flashcard(req.body)
        subject.flashcards.push(newFlashcard)
        return subject.save()
    }).then(savedSubject => {
        res.send({
            subject: savedSubject
        })
    })
})

router.patch("/:id", async (req, res) => {
    const subject = await Subject.findById(req.params.subjectId)
    const flashcardId = req.params.id
    const flashcardToEdit = subject.flashcards.id(flashcardId)
    flashcardToEdit.question = req.body.question
    flashcardToEdit.answer = req.body.answer
    const savedSubject = await subject.save()
    res.send({
        subject: savedSubject
    })
})

router.delete("/:id", async (req, res) => {
    const subject = await Subject.findById(req.params.subjectId)
    subject.flashcards.id(req.params.id).remove()
    const savedSubject = await subject.save()
    res.send(savedSubject)
})

module.exports = router