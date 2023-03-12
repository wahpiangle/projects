import { AiFillShopping } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

export default function NavBar(){
    return(
        <nav className="navbar">
            <NavLink to='/'>
                <h2>Online Shop</h2>
            </NavLink>
            <NavLink to='/cart'>
                <div className="nav-cart">
                    <AiFillShopping className="nav-cart-icon" />
                    <span className='nav-cart-quantity'>
                        <span>5</span>
                    </span>
                </div>
            </NavLink>
        </nav>
    )
}