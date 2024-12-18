import React,{useEffect} from 'react'

export default function Users(props) {

    useEffect(()=>{
        document.title= props.name;
    },[props.name])
    
  return (
    
    <h1>Hello {props.name}</h1>
  )
}
