// 1. import redux
import { createStore } from 'redux'

// 2. define store
const defaultState = {
    count:2
}

// 3. create reducer
const reducer = ( state=defaultState, action) => {
    // here is different processing logic of states
    if(action.type === 'adds'){
        return {
            count:defaultState.count + 1
        }
    }
    return state;
}

// 4. create state based on reducer
const store = createStore(reducer)
// create an action, which is identified with 'type'
const action = {
    type: "adds"
}

// use 'dispatch' to dispatch action
// The action will go into the reducer and trigger the corresponding update
store.dispatch(action)