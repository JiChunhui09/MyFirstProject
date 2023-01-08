import React from "react";

// Event binding of Class component
class CComponent extends React.Component{
    // class fields
    clickHandler = () => {
        // 'this' refers to the correct current component instance object
        // It is very easy to use the 'this' keyword to get other properties or methods on the component instance
        console.log(this)
    }

    clickHandler1 () {
        // Here 'this' does not point to the current component instance object undefined a problem of missing 'this'
        console.log(this)
    }

    render () {
        return (
            <div>
                {/* TODO: note, and notion*/}
                <button onClick={(e) => this.clickHandler(e, '123')}>click me</button>
                <button onClick={this.clickHandler1}>click me</button>
            </div>
        )
    }
}

function EventBindingClassComponent() {
    return (
        <div>
            <CComponent />
        </div>
    );
}

export default EventBindingClassComponent