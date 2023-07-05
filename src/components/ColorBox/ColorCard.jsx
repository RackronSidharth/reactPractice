import './color.css'
import { useState } from 'react'

function randmElement(arr) {
    const idx = Math.floor(Math.random() * arr.length)
    return arr[idx];
}
export default function ColorCard({ colors }) {

    const [color, setColor] = useState(randmElement(colors))
    const changeColor = () => {
        const randomColor = randmElement(colors)
        setColor(randomColor)
    }
    return (
        <>
            <div className="cardMain" style={{ backgroundColor: color }} onClick={changeColor}></div>
        </>
    )
}