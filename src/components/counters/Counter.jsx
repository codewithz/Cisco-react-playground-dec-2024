import React,{useState} from 'react'
// Child
export default function Counter(props) {
    // const [counter,setCounter]=useState(props.counter.value)   //State
    const {counter,onDelete,onIncrement,onDecrement}=props                    //Props coming from Parent Component
    function formatCount(){
        return counter.value ===0 ? "Zero" : counter.value
    }

    function getBadgeClasses(){
        let classes= 'badge m-2 '
        classes+=counter.value===0?'bg-warning':'bg-primary'
        return classes;
    }

    const handleIncrement = () =>{
        onIncrement(counter)
    }
    const handleDecrement = () =>{
        onDecrement(counter)
    }

    // const deleteHandler= ()=>{
    //     props.onDelete(props.counter.id)
    // }

  return (
    <div className='m-5'>
    {props.children}
      <h1 className={getBadgeClasses()}>{formatCount()}</h1>
      <button className='btn btn-secondary btn-sm m-2' onClick={handleIncrement}>Increment</button>
      <button className='btn btn-warning btn-sm' onClick={handleDecrement}>Decrement</button>
      <button 
        className='btn btn-danger btn-sm m-2' 
        onClick={()=>onDelete(counter.id)}>
            Delete
        </button>

    </div>
  )
}
