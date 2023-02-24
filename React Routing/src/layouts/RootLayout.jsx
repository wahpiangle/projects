import { NavLink, Outlet } from "react-router-dom"

export default function RootLayout() {
    return (
        <div className="root-layout">
            <header>
                <nav>
                    <h1>Jobrouter</h1>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="Help">Help</NavLink>
                </nav>
            </header>
            <main>
                {/* Outlet is a placeholder for the content of children routes */}
                <Outlet />
            </main>
        </div>
    )
}