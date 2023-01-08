import React from "react";

// TODO NOTE
// Parent component:
class ExampleTwo extends React.Component {
    // The data
    state = {
        message: 'this is a message'
    }
    // 1. prepare a function which will be passed to child
    getSonMessage =(childMessage) => {
        console.log(childMessage)
    }
    // Provide callback functions
    changeMessage=(newMessage) => {
        console.log('new message come from Child', newMessage)
        this.setState({
            message: newMessage
        })
    }
    render() {
        return (
            <div>
                {/* Child component binding attributes */}
                <div>Parent Component</div>
                <FSon msg={this.state.message}
                    // give to child
                      changeMessage={this.changeMessage} />
                {/*<FSon getSonMessage={this.getSonMessage}/>*/}
            </div>
        )
    }
}

function FSon(props) {
    // const {getSonMessage} = props
    function handleClick(){
        //Call the callback function passed by the parent component
        //inject the parameters
        props.changeMessage('this is new message')
    }
    return (
        <div>
            This is son.
            {props.msg}
            <button onClick={handleClick}>change message</button>
        </div>
    )
}

export default ExampleTwo