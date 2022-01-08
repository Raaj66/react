import React, { useState,useEffect} from 'react'
import useTitle from "./39.useTitle";

export default function CustomHooks() {
    const [count,setCount] = useState(0);
   useTitle(count)
    return (
        <div>
            <h1>Custom Hooks</h1>
            <h1>{count}</h1>
            <button onClick={()=>{setCount(count+1)}}>Click</button>
        </div>
    )
}
