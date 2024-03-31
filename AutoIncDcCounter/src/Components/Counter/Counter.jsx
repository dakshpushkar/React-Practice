import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)
    const [timer, setTimer] = useState()
    const [flag,setFlag] = useState(true)

    const handleIncrementCounter = () => {
        setFlag(true)
        if (timer) {
            clearInterval(timer)
            const tId = setInterval(() => {
                setCount(prev => prev + 1)
            }, 1000);

            setTimer(tId)
        }else{
            const tId = setInterval(() => {
                setCount(prev => prev + 1)
            }, 1000);

            setTimer(tId)
        }

    }
    const handleDecrementCount = () => {
        setFlag(false)
        if (timer) {
            clearInterval(timer)
            const tId = setInterval(() => {
                setCount(prev => prev - 1)
            }, 1000)
            setTimer(tId)
        }

    }
    return (
        <div>
            <h1 style={{color:`${flag? "green":"red"}`}}>Counter :{count}</h1>
            <button onClick={handleIncrementCounter}>Increment</button>
            <button style={{ marginLeft: 40 }} onClick={handleDecrementCount}>Decrement</button>

        </div>
    )
}