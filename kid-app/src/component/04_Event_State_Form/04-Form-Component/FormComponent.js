import React from "react";

class InputComponent extends React.Component {
    // Declare a component's state data in the component's state
    state = {
        message: 'message 1',
    }
    // Declaring event callback functions
    changeHandler = (e) => {
        this.setState({message: e.target.value})
    }
    render(){
        return(
            <div>
                {/* Bind value, Bind event*/}
                <input value={this.state.message} onChange={this.changeHandler} />
            </div>
        )
    }
}

function FormComponent(){
    return(
        <>
            <InputComponent />
        </>
    )
}

export default FormComponent;