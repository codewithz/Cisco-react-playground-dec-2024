import React,{useState} from 'react'
// Child
export default function Counter(props) {
    const [counter,setCounter]=useState(props.value)

    function formatCount(){
        return counter ===0 ? "Zero" : counter
    }

    function getBadgeClasses(){
        let classes= 'badge m-2 '
        classes+=counter===0?'bg-warning':'bg-primary'
        return classes;
    }

    const handleIncrement = () =>{
        setCounter(counter+1)
    }

  return (
    <div className='m-5'>
    {props.children}
      <h1 className={getBadgeClasses()}>{formatCount()}</h1>
      <button className='btn btn-secondary btn-sm' onClick={handleIncrement}>Increment</button>
      <button 
        className='btn btn-danger btn-sm m-2' 
        onClick={props.onDelete}
        >
            Delete
        </button>

    </div>
  )
}
