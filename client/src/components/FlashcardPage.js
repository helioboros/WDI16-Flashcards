import React, { Component } from "react"

class FlashcardPage extends Component {
    //handleChange
    //updateFlashcard
    render() {
        return (
            <div>
                <div>
                    <h1>{this.state.subject.subjectTitle}</h1>
                    <button onClick={this.createNewFlashcard}>New flashcard</button>
                </div>
                {/* <div>
                    {this.state.flashcards.map(flashcard => {
                        return (
                            <div key={flashcard._id}>
                                <div onClick={() => this.deleteflashcard(flashcard._id)}>
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
                                <div onClick = {() => this.updateFlashcard(flashcard._id)}>
                                <button>Save Changes</button>
                                </div>
                            </div>
                        )
                    })}
                </div> */}
            </div>
        )
    }
}

export default FlashcardPage