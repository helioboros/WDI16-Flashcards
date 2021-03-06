import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import NewSubjectForm from './NewSubjectForm'

const Subject = styled.div`
    border: 3px solid #E84855;
    border-radius: 5%;
`

class SubjectPage extends Component {
    state = {
        subjects: []
    }
    componentWillMount() {
        this.getSubjects()
    }
    getSubjects = async () => {
        const res = await axios.get('/api/subjects')
        this.setState({ subjects: res.data.subjects })
    }
    toggleShowNewForm = () => {
        this.setState({ showNewForm: !this.state.showNewForm })
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
            this.props.history.push(`/subjects/${res.data._id}`)
        })
    }
    deleteSubject = (subjectId) => {
        axios.delete(`/api/subjects/${subjectId}`).then((res) => {
            this.setState({
                subject: res.data.subject
            })
        })
        this.getSubjects()
    }

    render() {
        return (
            <div>
                <div className="header">
                    <h1>subject list</h1>
                </div>
                <div className="column">
                    {this.state.subjects.map(subject => (
                        <Subject key={subject._id}>
                            <div className="button" onClick={() => this.deleteSubject(subject._id)}>
                                <button>delete</button>
                            </div>
                            <div>
                                <Link key={subject._id} to={`/subjects/${subject._id}`}>
                                    <h3>{subject.title}</h3>
                                    <p>{subject.description}</p>
                                </Link>
                            </div>
                        </Subject>
                    ))}
                </div>
                <div className="button">
                    <button onClick={this.toggleShowNewForm}>Create New</button>
                    {this.state.showNewForm ? <NewSubjectForm getSubjects={this.getSubjects} /> : null}
                </div>
            </div>
        )
    }
}

export default SubjectPage