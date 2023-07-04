export default function Array({ colors }) {
    //    const colorList = colors.map((color) => (<li>{color}</li>)) //Method 1
    // return(
    //     <>
    //         <h1>List Of Colors:(</h1>
    //         <ul>
    //             <li>{colorList}</li>
    //         </ul>
    //     </>
    // )
    return (
        <>
            <h1>List Of Colors:(</h1>
            <ul>
                {colors.map((clr) =>(
                    <li style={{color:clr}}>{clr}</li>
                ))}
            </ul>
        </>
    )
}