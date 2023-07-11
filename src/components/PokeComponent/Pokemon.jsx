import PokeCard from "./PokeCard"
export default function Pokemon() {
    const arr = []
    for(let i =0; i<=25;1++){
        arr.push( <PokeCard />)
    }
    return (
        <>
            <div className="container">
                <div className="row g-4">
                    {arr[i]}
                </div>
            </div>
        </>
    )
}