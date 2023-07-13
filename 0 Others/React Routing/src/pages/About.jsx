import { Navigate } from "react-router-dom";
import { useState } from "react";

export default function About(){
    const [user, setUser] = useState('AHHHH');

    //if user is not logged in, redirect to home page, the replace makes it so that the browser history is changed
    if(!user){
        return <Navigate to="/" replace="true"/>
    }
    return (
        <div className="about">
            <h1>About</h1>
            <p>About Page</p>
            <button onClick={() => setUser(null)}>Logout</button>
        </div>
    )
}