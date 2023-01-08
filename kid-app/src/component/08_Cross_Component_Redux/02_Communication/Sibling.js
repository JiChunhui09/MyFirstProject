import React from 'react';
import ReactDOM from 'react-dom'; //react virtual dom

export default class Sibling extends React.Component {
    state = {
        num:10
    }

    // The callback of the component event in ComB changes the data in ComA
    addHandler = () => {
        this.setState({
            num: this.state.num+10
        })
    }

    render() {
        return (
            <div>
                <ComA num={ this.state.num}></ComA >
                <ComB addAdd={ this.addHandler}></ComB >
            </div>
        )
    }
}

// Component A
const ComA = props => {
    return (
        <h1>number: {props.num }</h1>
    )
}

// Component B
const ComB = props => {
    return (
        <button onClick={()=>props.addAdd()}>Add</button>
    )
}

ReactDOM.render(<Sibling></Sibling>,document.getElementById('root'))