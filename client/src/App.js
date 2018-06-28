import React, { Component } from 'react'
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'
import HomePage from './components/HomePage'
import SubjectPage from './components/SubjectPage'
import FlashcardPage from './components/FlashcardPage'

class App extends Component {
  state = {
    subjects: []
  }

  componentDidMount () {
    axios.get('/api/subjects').then((res) => {
      this.setState({ subjects: res.data.subjects })
    }).catch((err) => {
      console.error(err)
    })
  }

  render () {
    const SubjectPageWrapper = (props) => (
      <SubjectPage subjects={this.state.subjects} {...props} />
    )

    return (
      <Router>
        <div>
          <div>
            <Link to="/">Home</Link>
            <Link to="/subjects">Subjects</Link>
          </div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/subjects" render={SubjectPageWrapper} />
            <Route exact path="/subjects/:subjectId" component={FlashcardPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
