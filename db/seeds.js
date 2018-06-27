require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const {Flashcard, Subject} = require('./schema')

const alef = new Flashcard({
    question: "א‬",
    answer: "alef"
})
const bet = new Flashcard({
    question: "בּ‬",
    answer: "bet"
})
const vet = new Flashcard({
    question: "ב",
    answer: "vet"
})
const gimel = new Flashcard({
    question: "ג‬",
    answer: "gimel"
})
const dalet = new Flashcard({
    question: "ד‬",
    answer: "dalet"
})
const he = new Flashcard({
    question: "ה‬",
    answer: "he"
})
const vav = new Flashcard({
    question: "ו‬",
    answer: "vav"
})
const zayin = new Flashcard({
    question: "ז‬",
    answer: "zayin"
})
const het = new Flashcard({
    question: "ח‬",
    answer: "het"
})
const tet = new Flashcard({
    question: "ט",
    answer: "tet"
})
const yod = new Flashcard({
    question: "י‬",
    answer: "yod"
})
const chaf = new Flashcard({
    question: "כ‬",
    answer: "chaf"
})
const chafSofit = new Flashcard({
    question: "ך‬",
    answer: "chaf sofit"
})
const kaf = new Flashcard({
    question: "כּ",
    answer: "kaf"
})
const kafSofit = new Flashcard({
    question: "ךּ",
    answer: "kaf sofit"
})
const lamed = new Flashcard({
    question: "ל‬",
    answer: "lamed"
})
const mem = new Flashcard({
    question: "מ‬",
    answer: "mem"
})
const memSofit = new Flashcard({
    question: "ם‬",
    answer: "mem sofit"
})
const nun = new Flashcard({
    question: "נ‬",
    answer: "nun"
})
const nunSofit = new Flashcard({
    question: "ן‬",
    answer: "nun sofit"
})
const samekh = new Flashcard({
    question: "ס‬",
    answer: "samekh"
})
const ayin = new Flashcard({
    question: "ע‬",
    answer: "ayin"
})
const pe = new Flashcard({
    question: "פּ‬",
    answer: "pe"
})
const peSofit = new Flashcard({
    question: "ף",
    answer: "pe sofit"
})
const fe = new Flashcard({
    question: "פ‬",
    answer: "fe"
})
const feSofit = new Flashcard({
    question: "ףּ",
    answer: "fe sofit"
})
const tsadi = new Flashcard({
    question: "צ‬",
    answer: "tsadi"
})
const tsadiSofit = new Flashcard({
    question: "ץ‬",
    answer: "tsadi sofit"
})
const qof = new Flashcard({
    question: "ק‬",
    answer: "qof"
})
const reish = new Flashcard({
    question: "ר‬",
    answer: "reish"
})
const shin = new Flashcard({
    question: "ש‬",
    answer: "shin"
})
const tav = new Flashcard({
    question: "ת‬",
    answer: "tav"
})

const hebrew = new Subject({
    title: "Hebrew Alphabet",
    description: "A list of the Hebrew letters, sans vowels. Try to name each one.",
    flashcards: [ alef, bet, vet, gimel, dalet, he, vav,
        zayin, het, tet, yod, chaf, chafSofit, kaf,
        kafSofit, lamed, mem, memSofit, nun, nunSofit,
        ayin, samekh, pe, peSofit, fe, feSofit, tsadi,
        tsadiSofit, qof, reish, shin, tav ]
})

Subject.remove({})
    .then(() => hebrew.save())
    .then(() => console.log('Reset to default seeds'))
    .then(() => mongoose.connection.close())