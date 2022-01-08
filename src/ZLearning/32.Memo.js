// App.js
import React,{useState,memo} from 'react'

export function App() {
    const [count ,setCount]=useState(0);
    const [data, setData]=useState(0)
    return (
        <div>
            <h1>Home Page</h1>
     <h1>{count}</h1>
     <Memo data={data} />
     <button onClick={()=>{setCount(count+1)}}>Click</button>
        </div>
    )
}

// Memo.js
// import {memo} from 'react'

 function Memo(p) {
    console.warn("props",p.data)
    return (
        <div>
            <hr />
            <h1>From Memo page</h1>
            <h1>{p.data}</h1>
        </div>
    )
}
export default memo(Memo)