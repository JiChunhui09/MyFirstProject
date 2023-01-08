import React, {Component} from 'react';

export default class ChildToParent extends Component {
    state = {
        money: 1000,
    };

    //1. Parent component provides a callback function - for receiving data
    handleCostMoney = (num) => {
        this.setState({
            money: this.state.money - num,
        });
    };

    render() {
        return (
            <div>
                {/*2. The function is passed to the child component as the value of a property*/}
                <Child handleCostMoney={this.handleCostMoney}></Child>
                {this.state.money}
            </div>
        );
    }
}

class Child extends React.Component {
    render() {
        {/* 3. The child component calls in the click event*/}
        const { handleCostMoney } = this.props
        return (
            <div>
                {/* 4. Pass the data in the child component as a parameter to the callback function*/}
                <button onClick={() => handleCostMoney(100)}>click me to spend money</button>
            </div>
        );
    }
}