import React, { Component } from 'react'
import axios from 'axios'

class NewSubjectForm extends Component {
    state = {
        title: "",
        description: ""
    }
    //onChange, onSubmit
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="title">Title: </label>
              <input onChange={this.handleChange} type="text" name="title" value={this.state.title}/>
            </div>
            <div>
              <label htmlFor="description">Description: </label>
              <input onChange={this.handleChange} type="text" name="description" value={this.state.description}/>
            </div>
            <button>Submit</button>
          </form>
        )
    }
}

export default NewSubjectForm