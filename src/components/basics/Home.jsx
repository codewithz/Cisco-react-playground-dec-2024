import React from 'react'
import { HelloComponent } from './HelloComponent'
import { MyNameComponent } from './MyNameComponent'
import NameComponent from './NameComponent'
import NameFunctionalComponent from './NameFunctionalComponent'
import NameChangeFunctionalComponent from './NameChangeFunctionalComponent'
import TickerComponent from './TickerComponent'
import IncrementDecrementComponent from './IncrementDecrementComponent'


export default function Home() {
  return (
    <div>
       <h1>Welcome to the world of React at Cisco!!!</h1>
      <hr />
      <HelloComponent />
      <hr/>
      <MyNameComponent />
      <hr/>
      <NameComponent name="Tom" message="Learn React Well"/>
      <hr/>
      <NameFunctionalComponent name="Alex" message="Build a good website" /> 
      <hr />
      <NameChangeFunctionalComponent />
      <hr/>
      <TickerComponent />
      <hr/>
      <NameChangeFunctionalComponent />
      <hr/>
      <IncrementDecrementComponent />
    </div>
  )
}
