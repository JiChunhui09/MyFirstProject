import React from "react";

class ChildToParent extends React.Component {
    // The data
    state = {
        list: [1, 2, 3],
    }
    // 1. prepare a function which will be passed to child
    getSonMessage =(childMessage) => {
        console.log(childMessage)
    }
    render() {
        return (
            <div>
                {/* Child component binding attributes */}
                <div>Parent Component</div>
                {/*TODO 2*/}
                <FSon getSonMessage={this.getSonMessage}/>
            </div>
        )
    }
}

function FSon(props) {
    // TODO 3
    const {getSonMessage} = props
    return (
        <div>
            This is son of Function.
            {/*TODO 4*/}
            <button onClick={()=>getSonMessage('come from Child')}>Click</button>
        </div>
    )
}

export default ChildToParent;