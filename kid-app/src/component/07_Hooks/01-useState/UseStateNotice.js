import React, {useState} from "react";

function UseStateNotice(){
    const [count, setCount] = useState(0)
    // Return value：array,includes 2 values：1 （state） 2 （setState）
    console.log(count)
    // String as initial value
    const [name, setName] = useState('React')
    // Use the array as the initial value
    const [list,setList] = useState([])

    function test(){
        setCount(count + 1)
        setName('Ellen')
        setList([1,2,3])
    }

    return (
        // <button onClick={() => { setCount(count + 1) }}>{count}</button>
        <div>
            {count} {name} {list.join('-')} <br/>
            <button onClick={test}> + </button>
        </div>
    )
}

export default UseStateNotice