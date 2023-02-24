import { Link } from "react-router-dom";

export default function NotFound() {
    return(
        <div>
            <h2>Error 404 Page not found.</h2>
            <p>You went to the wrong page bro.</p>
            <p>Go back to the <Link to="/">Homepage</Link></p>
        </div>
    )
}