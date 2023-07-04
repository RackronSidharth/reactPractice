export default function ShopList({item, quantity, available}){
    const styles= {color : available ? "green" : "red", textDecoration : available ? "none" : "line-through"}
    return(
        <>
            <li style={styles}>{item} -{quantity}</li>
        </>
    )
}