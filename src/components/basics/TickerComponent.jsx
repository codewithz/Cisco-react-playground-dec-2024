import React, { Component } from 'react'

export default class TickerComponent extends Component {

    state={
        ticker:0
    }

    componentDidMount(){
        // setInterval(callThisFunction,afterThisManyMilliSeconds)
        this.timer=setInterval(this.tick,1000)
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }

    tick=()=>{
        this.setState({
            ticker:this.state.ticker+1
        })
    }

  render() {
    return (
      <div>
        <h3>Ticker Component -- Class</h3>
        <br/>
        <br/>
        Time ELapsed : {this.state.ticker} secs
        <br/>
        <br/>
        <br/>
      </div>
    )
  }
}
