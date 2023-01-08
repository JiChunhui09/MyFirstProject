import React, {useState} from "react";

// TODO
function UseState(){
    const [count, setCount] = useState(0)
    // Return value：array,includes 2 values：1 （state） 2 （setState）
    console.log(count)

    return (
        <button onClick={() => { setCount(count + 1) }}>{count}</button>
    )
}

export default UseState