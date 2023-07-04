import { Link } from "react-router-dom"
import { useState } from "react"
export default function PropList({ name, rating, price, img, offprice, available }) {
    const discPer = Math.floor(offprice / price * 100)
    const [discount,setDiscount] = useState(true) 
    const disCo =() =>{
        setDiscount (!discount);
    }
    return (  
        <>
            <div className="col-md-4">
                <div className="card">
                    <div className="card-img">
                        <img src={img} alt="" />
                    </div>
                    <div className="card-content">
                        <h3>{name}</h3>
                        <div className="price-rating">
                            <p className="rating">{rating} <i className="fa-solid fa-star"></i></p>
                            <p><strong>Price: {offprice ? `$${offprice}` : null}
                                <span className={offprice ? "offprice" : "currentprice"}> ${price}</span>
                                {offprice ? <span style={{ color: "#388E3C", fontWeight: "600" }}> {discount ? discPer : NaN }% off</span> : null}
                            </strong></p>
                        </div>
                        <Link to="#" className="btn btn-outline-success mt-4" onClick={disCo}>View Details</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

