import React from "react";

//TODO COMMENT
// Child component A
function SonA(props) {
    return (
        <div>
            SonA
            {props.msg}
        </div>
    )
}
// Child component B
function SonB(props) {
    return (
        <div>
            SonB
            <button onClick={() => props.changeMsg('new message')}>changeMsg</button>
        </div>
    )
}

// Parent component
class Sibling extends React.Component {
    // parent component provides the data of state
    state = {
        message: 'this is message'
    }
    // parent component provides the method of change state: setState
    changeMsg = (newMsg) => {
        this.setState({
            message: newMsg
        })
    }

    render() {
        return (
            <>
                {/* child component receive data */}
                <SonA msg={this.state.message} />
                {/* child component change the data */}
                <SonB changeMsg={this.changeMsg} />
            </>
        )
    }
}

export default Sibling