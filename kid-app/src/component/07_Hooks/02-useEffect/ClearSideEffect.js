import { useEffect, useState } from "react"

const ClearEffect = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        const timerId = setInterval(() => {
            setCount(count + 1)
        }, 1000)
        return () => {
            // clear effect event
            clearInterval(timerId)
        }
    }, [count])
    return (
        <div>
            {count}
        </div>
    )
}

export default ClearEffect