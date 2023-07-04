export default function Die(){
    const rand = Math.floor(Math.random() * 3) + 1;
    const randTwo = Math.floor(Math.random() * 3) + 1;
    const arr = ["Head","Tail"]
    let randOne = arr[Math.floor(Math.random() * arr.length)]
    return(
        <>
            {/* <h1>Die Roll: {rand}</h1> */}
            {/* <h3>{rand === randTwo ? "value match" : "unmatch" }:-  value First: {rand}, value Second: {randTwo}</h3> */}
            <span>{randOne}</span>
        </>
    )
}