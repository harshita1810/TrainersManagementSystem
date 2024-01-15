import React, { useState } from 'react'

const Counter12 = () => {

    const [count, setCount] = useState(0);

    return(
        <div>
            <p>Counter : {count}</p>
            <button onClick={()=> setCount((count+1))}>Increase</button>
            <button onClick={()=> setCount((count-1))}>Decrease</button>
        </div>
    )
}

export default Counter12