import React from 'react'
import ShopList from './ShopList'

const ShoppingList = ({ items }) => {
    return (
        <>
            <ul>
                {items.map((i) => (
                    <ShopList 
                    key ={i.id}
                    item={i.item}
                    quantity ={i.quantity}
                    available= {i.available}/>
                ))}
            </ul>
        </>
    )
}

export default ShoppingList