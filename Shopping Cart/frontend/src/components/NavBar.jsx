import { AiFillShopping, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
export default function NavBar() {
    const [activeComponent, setActiveComponent] = useState('');
    const [menuToggle, setToggleMenu] = useState(false);

    function handleNavClick(component) {
        setActiveComponent(component);
    }
    return (
        <nav className="navbar">
            <NavLink to='/' onClick={() => handleNavClick()}>
                <h2>SHOPPE</h2>
            </NavLink>
            <ul className='nav-links'>
                <li>
                    <NavLink to='/shop' onClick={() => handleNavClick('shop')}>
                        <p className={`nav-shop ${activeComponent === 'shop' ? 'active' : ''}`}>Shop</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/about' onClick={() => handleNavClick('about')}>
                        <p className={`nav-about ${activeComponent === 'about' ? 'active' : ''}`}>About Us</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/contact' onClick={() => handleNavClick('contact')}>
                        <p className={`nav-contact ${activeComponent === 'contact' ? 'active' : ''}`}>Contact Us</p>
                    </NavLink>
                </li>
            </ul>
            <div className='navbar-smallscreen'>
                <AiOutlineMenu className='navbar-smallscreen_icon' fontSize={27} onClick={()=>setToggleMenu(state=> !state)}/>
                {menuToggle && <div className='navbar-smallscreen_overlay'>
                    <ul className='overlay-links'>
                        <AiOutlineClose className='overlay_close' onClick={()=>setToggleMenu(state => !state)}/>
                        <li onClick={()=>setToggleMenu(state => !state)}><NavLink to='/'>Home</NavLink></li>
                        <li onClick={()=>setToggleMenu(state => !state)}><NavLink to='/shop'>Shop</NavLink></li>
                        <li onClick={()=>setToggleMenu(state => !state)}><NavLink to='/about'>About</NavLink></li>
                        <li onClick={()=>setToggleMenu(state => !state)}><NavLink to='/contact'>Menu</NavLink></li>
                    </ul>
                </div>}
            </div>
            <NavLink to='/cart' onClick={() => handleNavClick()}>
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