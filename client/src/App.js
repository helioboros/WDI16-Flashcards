import React, { Component } from 'react'
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'
import HomePage from './components/HomePage'
import SubjectPage from './components/SubjectPage'
import FlashcardPage from './components/FlashcardPage'
import styled from 'styled-components'
import { injectGlobal } from 'styled-components'

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-around;
  justify-content: space-around;
  background: #1B998B;
  border-bottom: 5px solid #2D3047;
  color: #FFFD82;
  a {
  color: #FFFD82;
  };
`
injectGlobal`
  html {
    background: #FFFD82;
    font-size: 2vw;
    color: #FF9B71;
    a {
      color: #E84855;
    }
    .column {
      display: flex;
      max-width: 60vw;
      flex-direction: column;
      align-items: space-around;
      justify-content: space-around;
      padding: 1vw;
      margin: 1vw;
    }
    .header {
      display: flex;
      justify-content: space-around;
      margin: 10 auto;
    }
    .button {
      display: flex;
      justify-content: flex-end;
      margin: .5vw;
      button {
          background: #E84855;
          color: #FFFD82;
      }
    }
    .component {
      display: flex;
      flex-direction: column;
    }
  }
`

class App extends Component {
  state = {
    subjects: []
  }

  componentDidMount() {
    axios.get('/api/subjects').then((res) => {
      this.setState({ subjects: res.data.subjects })
    }).catch((err) => {
      console.error(err)
    })
  }

  render() {
    const SubjectPageWrapper = (props) => (
      <SubjectPage subjects={this.state.subjects} {...props} />
    )

    return (
      <Router>
        <div>
          <Navbar>
            <Link to="/">Home</Link>
            <Link to="/subjects">Subjects</Link>
          </Navbar>
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
