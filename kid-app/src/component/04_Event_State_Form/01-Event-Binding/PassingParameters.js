const PassingParameters = () => {
    const list = [
        {
            id: 1001,
            name: 'react'
        },
        {
            id: 1002,
            name: 'vue'
        }
    ]
    const onDel = (e, id) => {
        console.log(e, id)
    }
    return (
        <ul>
            {list.map(item =>(
                <li key={item.id}>
                    {item.name}
                    <button onClick={(e) => onDel(e, item.id)}>x</button>
                </li>
            ))}
        </ul>
    )
}

export default PassingParameters