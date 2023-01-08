import React from 'react'

export default class ParentAndChild extends React.Component {
    render() {
        return <div>
            <ComA name={'Ellen'} age={21}></ComA>
            <ComB name={'Ji'} age={21}></ComB>
        </div>
    }
}

function ComA({ name, age }) {
    // console.log(props);
    return <div>{name},{age}</div>
}

class ComB extends React.Component {
    render() {
        // console.log(this);
        const { name,age } = this.props
        return <div>{name},{age}</div>
    }
}