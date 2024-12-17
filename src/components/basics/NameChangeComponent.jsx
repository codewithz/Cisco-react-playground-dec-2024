import React, { Component } from 'react'

export default class NameChangeComponent extends Component {

    state={
        name:'Cisco',
        country:'India'
    }

    changeName=()=>{
        this.setState({
            name:'Cisco Inc'
        })
    }
  render() {
    return (
      <div>
        <h2>Name State Component</h2>
        <h3>Company Name: {this.state.name}</h3>
        <h3>Country: {this.state.country}</h3>
        <br/>
        <button onClick={this.changeName} >Change Name</button>
      </div>
    )
  }
}
