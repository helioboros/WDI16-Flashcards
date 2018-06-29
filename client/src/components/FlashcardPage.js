import React, { Component } from "react"

class FlashcardPage extends Component {
    //DISPLAY ALL FLASHCARDS
    render() {
        return (
            <div>
                <div>
                    <h1>{this.state.user.userName}'s flashcard Board</h1>
                    <button onClick={this.createNewFlashcard}>New flashcard</button>
                </div>
                <div>
                    {this.state.flashcards.map(flashcard => {
                        return (
// uuuh flashcards
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default FlashcardPage