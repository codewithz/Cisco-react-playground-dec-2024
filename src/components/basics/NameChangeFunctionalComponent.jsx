import React,{useState} from 'react'

export default function NameChangeFunctionalComponent() {

    const [name,setName]=useState("Cisco")
    const [country,setCountry]=useState("India")

    const changeName= ()=>{
        setName("Cisco Inc")
    }
  return (
    <div>
         <div>
        <h2>Name Functional  Component</h2>
        <h3>Company Name: {name}</h3>
        <h3>Country: {country}</h3>
        <br/>
        <button onClick={changeName} >Change Name</button>
      </div>
    </div>
  )
}
