import React, { Component } from 'react'
import styled from 'styled-components'

const Heading = styled.div`

`
const Caption = styled.div`

`

class HomePage extends Component {
  render() {
    return (
      <div>
        <Heading>
          <h1>Welcome to the home page</h1>
        </Heading>
        <Caption>Why don't you click above for a list of subjects (:</Caption>
      </div>
    )
  }
}

export default HomePage
