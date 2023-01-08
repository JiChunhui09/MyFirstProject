function HelloFn () {
    return <div>This is my first Function Component!</div>
}
function FunctionComponentSample() {
    return (
        <div className="App">
            {/* Function Component */}
            <HelloFn/>
            <HelloFn></HelloFn>
        </div>
    );
}

export default FunctionComponentSample;