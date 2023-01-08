import React from 'react'
// 1. import redux
import {bindActionCreators, createStore} from 'redux'
import {Provider, connect} from 'react-redux'

// 2. define store
const initState = {
    count:0
}

// 3. create reducer
const counter = (state = initState, action) => {
    // here is different processing logic of states
    if(action.type === 'inc'){
        return { count: state.count+1}
    }else if(action.type === 'dec'){
        return { count: state.count-1}
    }
    return state
}

// 4. create state based on reducer
const store = createStore(counter)
// create action-s, which are identified with 'type'
function incOne(){
    return {type: 'inc'}
}
function decOne(){
    return {type: 'dec'}
}

export class Counter extends React.Component{
    render(){
        const {count,decOne,incOne} = this.props
        return (
            <div>
                <button onClick={decOne}> - </button>
                <span>{count}</span>
                <button onClick={incOne}> + </button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        count: state.count
    }
}

// use 'dispatch' to dispatch action
// The action will go into the reducer and trigger the corresponding update
function mapDispatchToProps(dispatch){
    return bindActionCreators({incOne,decOne},dispatch)
}

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps) (Counter);

function ExampleOfRedux(){
    return (
        <Provider store={store}>
            <ConnectedCounter></ConnectedCounter>
        </Provider>
    );
}

export default ExampleOfRedux;