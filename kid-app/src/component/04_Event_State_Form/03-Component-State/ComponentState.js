import React from "react";

class TestComponent extends React.Component {
    // 1. define the component state
    state = {
        // can define different features, all are the state of component
        name: 'React Learning',
        id: 1
    }
    // 2. how to use the state
    render() {
        return (
            <div>
                This is TestComponent. <br />
                name is: {this.state.name} <br />
                id is: {this.state.id} <br />
                <button onClick={this.changeName}>Change Name</button>
            </div>
        )
    }
    // 3. how to modify the state: Event callback function
    // cannot do modification of values directly, but must be done via a method setState
    changeName = () => {
        this.setState({name: 'Ellen is Learning React'}
        )
    }
}

function ComponentState(){
    return(
        <>
            <TestComponent />
        </>
    )
}

export default ComponentState;

