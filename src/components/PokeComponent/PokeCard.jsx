import './Poke.css'
export default function PokeCard() {
    const randM = Math.floor(Math.random() * 150) + 1;
    return (
        <> <div className="col-md-4">
            <div className="poke_card">
                <h3>Pokemon  Number:- #{randM}</h3>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randM}.png`} />
            </div>
        </div>
        </>
    )
}