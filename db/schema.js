const mongoose = require("mongoose")

const Schema = mongoose.Schema

const flashcardSchema = new Schema({
    question: {
        type: String,
        default: 'New Question'
    },
    answer: {
        type: String,
        default: 'New Answer'
    }
})
const subjectSchema = new Schema({
    title: {
        type: String,
        default: 'New Title'
      },
      description: {
        type: String,
        default: 'New Description'
      },
      flashcards: [flashcardSchema]
})

const Flashcard = mongoose.model("Flashcards", flashcardSchema)
const Subject = mongoose.model("Subject", subjectSchema)

module.exports = {
    Flashcard,
    Subject
}