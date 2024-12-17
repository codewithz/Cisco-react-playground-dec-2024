import React,{useState} from 'react'

export default function Counter() {
    const [counter,setCounter]=useState(0)

    const [tags]=useState(['tag1','tag2','tag3'])

    function formatCount(){
        return counter ===0 ? "Zero" : counter
    }

    function getBadgeClasses(){
        let classes= 'badge m-2 '
        classes+=counter===0?'bg-warning':'bg-primary'
        return classes;
    }

    function renderTags(){
        if(tags.length === 0){
            return <p>There are no tags</p>
        }else{
            return <ul>
            {
                tags.map((tag)=>(
                    <li key={tag}>{tag}</li>
                ))
            }
          </ul>
        }
    }

    const handleIncrement = () =>{
        setCounter(counter+1)
    }

  return (
    <div>
      <h1 className={getBadgeClasses()}>{formatCount()}</h1>
      <button className='btn btn-secondary bnt-sm' onClick={handleIncrement}>Increment</button>
      {renderTags()}
    </div>
  )
}
