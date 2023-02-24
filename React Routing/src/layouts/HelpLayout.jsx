import { Outlet,NavLink } from "react-router-dom";

export default function HelpLayout() {
    return (
        <div className="help-layout">
            <h2>Website Help</h2>
            <p>Lorem Ipsum text</p>

            <nav>
                <NavLink to="faq">View FAQ</NavLink>
                <NavLink to="contact">Contact Us</NavLink>
            </nav>

            {/* Outlet element here used to display children routes */}
            <Outlet />
        </div>
    )
}