export default function Slot({val1, val2, val3}){
    const isWinner = val1 === val2 && val1 === val3
    isWinner ? console.log("Your win") : console.log("You Loose")
    return(
        <><h1>{val1} {val2} {val3}</h1>
           <h2 style = {{color : isWinner ? "Green" : "red"}}>
            {isWinner ? <span>You Win</span> : <span>You Loose</span>}</h2>  
            {isWinner && <h3 style={{ marginBottom: isWinner && "20px", fontWeight: "bold" }}>Congrats</h3>}  
        </>
    )
}