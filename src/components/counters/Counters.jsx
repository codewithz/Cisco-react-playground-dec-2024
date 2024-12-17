import React,{useState} from 'react'
import Counter from './Counter'

export default function Counters() {

    const [counters]=useState([
        {id:1,value:0},
        {id:2,value:10},
        {id:3,value:3},
        {id:4,value:8},
        {id:5,value:1},
    ])

  return (
    <div>
      {
        counters.map(
            (counter)=> (<Counter key={counter.id} value={counter.value} />)
        )
      }
    </div>
  )
}
