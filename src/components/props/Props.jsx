import './prop.css'
import { NavLink } from 'react-router-dom';

export default function Props({img, price, btn}) {
    return (
        <>
            <div className="card">
                <div className="card-image">
                    <img src={img} alt="" />
                </div>
                <div className="card-content">
                    <h3>${price}</h3>
                    <NavLink href="https://upmostly.com/tutorials/what-is-hash-routing" className="btn btn-dark">{btn}</NavLink>
                </div>
            </div>
        </> 
    )
}
