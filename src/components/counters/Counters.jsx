import React,{useState} from 'react'
import Counter from './Counter'
// Parent
export default function Counters() {

    const [counters,setCounters]=useState([
        {id:1,value:0},
        {id:2,value:10},
        {id:3,value:3},
        {id:4,value:8},
        {id:5,value:1},
    ])

    const handleDelete = (counterId)=>{
        console.log("Counter has been deleted",counterId)
        setCounters(counters.filter((c)=>c.id!==counterId))
    }

    const handleReset= ()=>{
        setCounters(
            counters.map (
                (c)=>{
                    c.value=0;
                    return c;
                }
            )
        );
    }

  return (
    <div>
        <button onClick={handleReset} className='btn btn-primary btn-sm m-2'>Reset</button>
      {
        counters.map(
            (counter)=> (
        
                <Counter 
                    // key={counter.id}
                    onDelete={handleDelete}
                    counter={counter}
                    >

                    <h4>Counter #{counter.id}</h4>

                </Counter>
        
        )
        )
      }
    </div>
  )
}
