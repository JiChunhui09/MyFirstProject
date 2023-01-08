import React, {Component} from 'react';

export default class ParentToChild extends Component {
    // 1. Parent component provides the data to be passed - state
    state = {
        money: 1000,
    };

    //3.2 Functional components get the props object directly from the parameters
    handleMakeMoney = () => {
        this.setState({
            money: 1000 + this.state.money,
        });
    };

    render() {
        return (
            <div>
                <button onClick={this.handleMakeMoney}>parent make money</button>
                {/*2. Adds an attribute to the child component tag with the value of the data in the state*/}
                <Child money={this.state.money}></Child>
            </div>
        );
    }
}

//3. The child component receives the data from the parent component via props.
class Child extends React.Component {
    render() {
        // 3.1 Class components use this.props to obtain a props object
        const { money } = this.props
        return (
            <div>
                <h1>parent give child some money： {money}</h1>
            </div>
        );
    }
}