import React from 'react'

function FSon({ list, userInfo, getMessage, child}) {
    return (
        <div>
            Child Component 1: Function;
            {list.map(item => <p key={item}>{item}</p>)}
            {userInfo.name}
            <button onClick={getMessage}>Click to show props</button>
            {child}
        </div>
    )
}

class CSon extends React.Component {
    render() {
        return (
            <div>
                Child Component 2: Class
                {this.props.list.map(item => <p key={item}>{item}</p>)}
                {this.props.userInfo.name}
                {this.props.child}
            </div>
        )
    }
}

// Parent component:
class ExampleTwo extends React.Component {
    // The data
    state = {
        list: [1, 2, 3],
        userInfo: {
            name: 'Ellen',
            age: 18,
            habit: 'Video Game'
        }
    }
    // Function:
    getMessage = () => {
        console.log('successfully props')
    }
    render() {
        return (
            <div>
                {/* Child component binding attributes */}
                <div>Parent Component</div>
                <FSon
                    list={this.state.list}
                    userInfo={this.state.userInfo}
                    getMessage={this.getMessage}
                    child={<span>This is child</span>}
                />
                <CSon
                    list={this.state.list}
                    userInfo={this.state.userInfo}
                    child={<span>This is child</span>}
                />
            </div>
        )
    }
}

export default ExampleTwo