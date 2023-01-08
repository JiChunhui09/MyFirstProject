function BindEvent () {
    // define CALLBACK function of 01-Event-Binding
    const clickHandler = () => {
        console.log('Event has been triggered')
    }
    return (
        // <div>This is my first Function Component!</div>
        <button onClick={clickHandler}>Click me!</button>
    )
}

export default BindEvent