'use client'
import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)
    return (
        <div className="flex flex-col item-center w-[100px]">        
            <p className='text-5xl font-bold'>{count}</p>
            <button className="bg-blue-500 rounded-md text-white px-4 py-2 mt-4" onClick={() => setCount(count + 1)}>increment</button>        
        </div>
    )
}