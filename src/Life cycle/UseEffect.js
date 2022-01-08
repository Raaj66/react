/* eslint-disable */
import React, {useState, useEffect} from 'react'

function UseEffect() {
    const [count,setCount] = useState(5)

    useEffect(()=>{
        console.warn(count)
        document.title = "Raaj";
    },[count == 8])
    return (
        <div>
            <h1>count {count}</h1>
            <button onClick={()=>setCount(count + 1)}>click me</button>
        </div>
    )
}

export default UseEffect
