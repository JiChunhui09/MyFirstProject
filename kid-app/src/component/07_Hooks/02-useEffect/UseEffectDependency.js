import { useEffect, useState } from 'react'

function UseEffectDependency() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Ellen')

    // no dependency
    // useEffect(()=>{
    //     document.title = `Now has clicked ${count} times`
    //     console.log('side effect is executed')
    // })

    // dependency: empty array
    // useEffect(()=>{
    //         document.title = `Now has clicked ${count} times`
    //         console.log('side effect is executed')
    //     },[])

    // specific dependency
    useEffect(()=>{
        document.title = `Now has clicked ${count} times`
        console.log('side effect is executed')
    },[count])

    return (
        <>
            <button onClick={() => { setCount(count + 1) }}>{count}</button>
            <button onClick={() => { setName('React') }}>{name}</button>
        </>
    )
}

export default UseEffectDependency