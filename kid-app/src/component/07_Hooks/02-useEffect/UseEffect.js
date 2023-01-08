import { useEffect, useState } from 'react'

function UseEffect() {
    const [count, setCount] = useState(0)

    useEffect(()=>{
        // dom operation
        document.title = `Now has clicked ${count} times`
    })
    return (
        <button onClick={() => { setCount(count + 1) }}>{count}</button>
    )
}

export default UseEffect