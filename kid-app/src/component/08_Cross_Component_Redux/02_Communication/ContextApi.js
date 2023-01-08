import React, { createContext }  from "react";
// App -> A -> C
// App data -> C

// 1. Create Context object, Export Provider and Consumer object.
const { Provider, Consumer } = createContext(undefined)

// 3. Wrapping upper level components with Provider to provide data.
function ComC() {
    return (
        <div>
            this is ComC.
            <Consumer>
                {value => <span>{value}</span>}
            </Consumer>
        </div>
    )
}
function ComA() {
    return (
        <div>
            this is ComA.
            <ComC/>
        </div>
    )
}
// 2. Wrapping upper level components with Provider to provide data.
class ContextApi extends React.Component {
    state = {
        message: 'this is message'
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
export default ContextApi;