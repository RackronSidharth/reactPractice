import './color.css'
import ColorCard from './ColorCard'
export default function ColorList({ colors }) {
    const cards = [];
    for (let i = 0; i < 25; i++) {
        cards.push(<ColorCard colors={colors} />)
    }
    return (
        <>
            <div className="grid-box">
                {cards}
            </div>
        </>
    )
}