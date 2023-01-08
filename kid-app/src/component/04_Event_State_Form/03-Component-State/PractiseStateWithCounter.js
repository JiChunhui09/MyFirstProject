import React from "react";

class Counter extends React.Component{
    state = {
        count: 0
    }
    setCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render(){
        return <button onClick={this.setCount}>Counter: {this.state.count}</button>
    }
}

function PractiseStateWithCounter(){
    return(
        <>
            <Counter />
        </>
    )
}

export default PractiseStateWithCounter;
