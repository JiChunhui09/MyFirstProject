// import React
import React from "react";

// Class Components
class HelloC extends React.Component{
    render() {
        return <div>This is my first Class Component!</div>
    }
}

function ClassComponentSample() {
    return (
        <div className="App">
            {/* Class Component */}
            <HelloC />
            <HelloC></HelloC>
        </div>
    );
}

export default ClassComponentSample;