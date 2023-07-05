import './color.css'
import { useState } from 'react'

export default function ColorCard({colors}) {
    const randColor = colors[Math.floor(Math.random() * colors.length)]

    const [color, setColor] = useState(randColor)
    const changeColor = () => {
        setColor(randColor)
    }
    return (
        <>
            <div className="cardMain" style={{ backgroundColor: color }} onClick={changeColor}></div>
        </>
    )
}