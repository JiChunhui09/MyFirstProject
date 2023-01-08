const name = 'Ellen Ji'
const getAge = ()=>{
    return 18
}
const flag = true

function JsExpression() {
    return (
        <div className="App">
            {name} <br/>
            {getAge()} <br/>
            {flag ? 'Well Done!':'Try Hard..'}
        </div>
    );
}

export default JsExpression;