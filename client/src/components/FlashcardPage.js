import React, { Component } from "react"
import axios from 'axios'
import styled from 'styled-components'

const ListOfFlashcards = styled.div`
    display: flex;
    align-items: flex-start;
`

class FlashcardPage extends Component {
    state = {
        subject: {},
        flashcards: []
    }
    componentDidMount() {
        const subjectId = this.props.match.params.subjectId

        axios.get(`/api/subjects/${subjectId}/`).then((res) => {
            this.setState({
                subject: res.data.subject,
                flashcards: res.data.subject.flashcards
            })
        })
    }
    createNewFlashcard = () => {
        const subjectId = this.props.match.params.subjectId
        axios.post(`/api/subjects/${subjectId}/`).then((res) => {
            this.setState({
                subject: res.data.subject,
                flashcards: res.data.subject.flashcards
            })
        })
    }
    updateFlashcard = (flashcardId) => {
        const subjectId = this.props.match.params.subjectId
        const flashcardToSend = this.state.flashcards.find(idea => idea._id === flashcardId)
        axios.patch(`/api/subjects/${subjectId}/${flashcardId}`, flashcardToSend).then((res) => {
            this.setState({
                subject: res.data.subject,
                flashcards: res.data.subject.flashcards
            })
        })
    }
    deleteFlashcard = (flashcardId) => {
        const subjectId = this.props.match.params.subjectId
        axios.delete(`/api/subjects/${subjectId}/${flashcardId}`).then((res) => {
            this.setState({
                subject: res.data,
                flashcards: res.data.flashcards
            })
        })
    }
    handleChange = (event, flashcardId) => {
        const newFlashcardsArray = [...this.state.flashcards]
        const newFlashcard = newFlashcardsArray.find(flashcard => flashcard._id === flashcardId)
        const inputName = event.target.name
        const userInput = event.target.value
        newFlashcard[inputName] = userInput
        this.setState({ flashcards: newFlashcardsArray })
    }
    render() {
        const listOfFlashcards = this.state.flashcards || []
        return (
            <ListOfFlashcards>
                <div className="header">
                    <h1>{this.state.subject.subjectTitle}</h1>
                </div>
                <div className="button">
                    <button onClick={this.createNewFlashcard}>New flashcard</button>
                </div>
                <div className="column">
                    {listOfFlashcards.map(flashcard => {
                        return (
                            <div className="component" key={flashcard._id}>
                                <div className="button" onClick={() => this.deleteFlashcard(flashcard._id)}>
                                    <button>X</button>
                                </div>
                                <input
                                    type="text"
                                    name="question"
                                    value={flashcard.question}
                                    onChange={(event) => this.handleChange(event, flashcard._id)}
                                />
                                <textarea
                                    name="answer"
                                    value={flashcard.answer}
                                    onChange={(event) => this.handleChange(event, flashcard._id)}
                                />
                                <div className="button" onClick={() => this.updateFlashcard(flashcard._id)}>
                                    <button>Save Changes</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </ListOfFlashcards>
        )
    }
}

export default FlashcardPage