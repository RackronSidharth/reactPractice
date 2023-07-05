import './color.css'
import { useState } from 'react'
export default function ColorCard() {
    const [color, setColor] = useState("purple")
    const changeColor = () => {
        setColor("pink")
    }
    return (
        <>
            <div className="cardMain" style={{ backgroundColor: color }} onClick={changeColor}></div>
        </>
    )
}