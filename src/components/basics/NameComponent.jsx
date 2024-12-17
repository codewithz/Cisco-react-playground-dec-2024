import React, { Component } from 'react'

export default class NameComponent extends Component {
  render() {
    const name=this.props.name
    const message=this.props.message
    return (
      <div>
        <h3>Name : {name}</h3>
        <h3>Message : {message}</h3>
      </div>
    )
  }
}


