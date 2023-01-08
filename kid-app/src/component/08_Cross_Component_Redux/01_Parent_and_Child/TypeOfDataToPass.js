import React from 'react'

export default class TypeOfDataInPropsToPass extends React.Component {
    render() {
        return (
            <div>
                {/* null undefined boolean  */}
                <Child name={null} age={undefined} gender={true}></Child>
                {/* object  */}
                <Child person={{ zs: 'zs' }}></Child>
                {/* Array */}
                <Child list={[1, 2, 3, 4]}></Child>
                {/* function */}
                <Child fn={() => alert(123)}></Child>
                {/* JSX  */}
                <Child msg={<i>JSX from props</i>}></Child>
            </div>
        );
    }
}

function Child({ msg, name, age, gender, person, list, fn }) {
    console.log('fn  ----->  ', fn);
    return (
        <div>
            {/* number string  */}
            I am child - {String(name)} - {age}
            <h1>{gender}</h1>
            {JSON.stringify(person)}
            <h2>{list}</h2>
            <button onClick={fn}>click me</button>
            {msg}
        </div>
    );
}