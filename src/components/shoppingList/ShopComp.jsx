import React from 'react'
import ShoppingList from './ShoppingList'
const data = [
  { id: 1, item: "Milk", quantity: 12, available: false },
  { id: 2, item: "Chicken", quantity: 10, available: true },
  { id: 3, item: "Gauva", quantity: 4, available: true },
  { id: 4, item: "Honey", quantity: 0, available: false },
  { id: 5, item: "JackFruit", quantity: 20, available: true },
  { id: 6, item: "Papaya", quantity: 30, available: false }
]
const ShopComp = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column" style={{ height: "600px"}}>
        <ShoppingList items={data} />
      </div>
    </> 
  )
}

export default ShopComp