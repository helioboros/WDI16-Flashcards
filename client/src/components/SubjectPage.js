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
                {this.state.subjects.map(subject => (
                    <Link key={subject._id} to={`/${subject._id}`}>
                        <h3>Title: {subject.title}</h3>
                        <p>Description: {subject.description}</p>
                    </Link>
                ))}
                <button onClick={this.toggleShowNewForm}>Create New</button>

                {this.state.showNewForm ? <NewSubjectForm getSubjects={this.getSubjects} /> : null}

            </div>
        )
    }
}

export default SubjectPage