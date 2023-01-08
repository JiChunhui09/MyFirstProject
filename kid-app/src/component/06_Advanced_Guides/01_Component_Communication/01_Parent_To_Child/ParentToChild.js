import React from "react";

class ParentToChild extends React.Component {
    state = {
        message: 'this is message'
    }
    render() {
        return (
            <div>
                {/* Child component binding attributes */}
                <div>Parent Component</div>
                <FSon msg={this.state.message} />
                <CSon msg={this.state.message} />
            </div>
        )
    }
}

// Child Component:
// props is an object that stores all the data stored by the parent component
// function:
function FSon(props) {
    console.log(props)
    return (
        <div>
            Child Component 1: Function
            {props.msg}
        </div>
    )
}

// Class:
class CSon extends React.Component {
    render() {
        return (
            <div>
                Child Component 2: Class
                {this.props.msg}
            </div>
        )
    }
}

export default ParentToChild;