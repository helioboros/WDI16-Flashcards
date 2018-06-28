import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class SubjectPage extends Component {
    state = {
        title: "",
        description: "",
    }

    handleChange = (event) => {
        const inputName = event.target.name
        const subjectInput = event.target.value
        this.setState({
            [inputName]: subjectInput
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/subjects', this.state).then((res) => {
            console.log(res.data)
            this.props.history.push(`/subjects/${res.data._id}`)
        })
    }

    render() {
        return (
            <div>
                <h1>subject list</h1>
                {this.props.subjects.map((subject) => {
                    return (
                        <Link key={subject._id} to={`/subject/${subject._id}`}>{subject.subjectName}</Link>
                    )
                })}

                <h3>Create a subject</h3>
                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder="Subject Name"
                        type="text"
                        name="subjectName"
                        value={this.state.subjectName}
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder="Description"
                        type="text"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                    />

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default SubjectPage