// TODO

import React, { createContext }  from "react";
// App -> A -> C
// App data -> C

// 1. create Context object
const { Provider, Consumer } = createContext(undefined)

// 3. Consumer data
function ComC() {
    return (
        <div>
            this is ComC <br />
            <Consumer>
                {value => <span>{value}</span>}
            </Consumer>
        </div>
    )
}

function ComA() {
    return (
        <div>
            <ComC/>
        </div>
    )
}
// 2. Provider data
class Context extends React.Component {
    state = {
        message: "this is message"
    }
    render() {
        return (
            // use provider wrapping root component
            <Provider value={this.state.message}>
                <div>
                    <ComA />
                </div>
            </Provider>
        )
    }
}
export default Context;