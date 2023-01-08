import React from "react";

// Child Component
function ListItem(props) {
    const { name, price, info, id, delHandler } = props
    return (
        <div>
            <h3>{name}</h3>
            <p>{price}</p>
            <p>{info}</p>
            <button onClick={() => delHandler(id)}>Delete</button>
        </div>
    )
}

// Parent Component
class Practise extends React.Component {
    state = {
        list: [
            { id: 1, name: 'Lollipop', price: 2.99, info: 'Opening ceremony, 20% off the whole site' },
            { id: 2, name: 'Fried Chicken Wing', price: 14.99, info: 'Opening ceremony, 20% off the whole site' },
            { id: 3, name: 'Ice Cream', price: 5.99, info: 'Opening ceremony, 20% off the whole site' }
        ]
    }
    delHandler = (id) => {
        this.setState({
            list: this.state.list.filter(item => item.id !== id)
        })
    }
    render() {
        return (
            <>
                {
                    this.state.list.map(item =>
                        <ListItem
                            key={item.id}
                            {...item}
                            delHandler={this.delHandler}
                        />
                    )
                }
            </>
        )
    }
}

export default Practise;