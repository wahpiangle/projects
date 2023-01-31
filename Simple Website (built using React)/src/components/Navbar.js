import React from "react"

export default function Navbar(props){
    return(
        <nav className={props.darkMode ? "dark": ""}>
            <img src="React-icon.svg" className="icon-image"/>
            <h1 className="page-title">React Facts</h1>
            <div
                className="toggler"
            >
                <p className="toggler-light">Light</p>
                <div
                    className="toggler-slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler-slider-circle"></div>
                </div>
                <p className="toggler-dark">Dark</p>
            </div>
        </nav>
    )
}