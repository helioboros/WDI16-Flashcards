import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const SubjectForm = styled.div`
    background: #1B998B;
    border: 2px solid #2D3047;
    border-radius: 5%;
    max-width: 300px;
    color: #FFFD82;
`

class NewSubjectForm extends Component {
    state = {
        title: "",
        description: ""
    }

    handleChange = (event) => {
        const title = event.target.name
        const newState = { ...this.state }
        newState[title] = event.target.value
        this.setState(newState)
    }
    handleSubmit = async (event) => {
        event.preventDefault()
        const payload = {
            title: this.state.title,
            description: this.state.description
        }
        await axios.post('/api/subjects', payload)
        await this.props.getSubjects()
    }

    render() {
        return (
            <SubjectForm>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="title">Title: </label>
                        <input onChange={this.handleChange} type="text" name="title" value={this.state.title} />
                    </div>
                    <div>
                        <label htmlFor="description">Description: </label>
                        <input onChange={this.handleChange} type="text" name="description" value={this.state.description} />
                    </div>
                    <button>Submit</button>
                </form>
            </SubjectForm>
        )
    }
}

export default NewSubjectForm