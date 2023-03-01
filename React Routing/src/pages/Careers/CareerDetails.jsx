import { useLoaderData, useParams } from "react-router-dom";

export default function CareerDetails(){
    // the parameter passed into useParams has to match the path :id in the App.jsx file
    const { id } = useParams();
    const career = useLoaderData();
    return(
        <div className="career-details">
            <h2>Career Details for {career.title}</h2>
            <p>Starting Salary: {career.salary}</p>
            <p>Location: {career.location}</p>
            <div className="details">
                <p>Lorem ipsum text, bla bla bla</p>
            </div>
        </div>
    )
}

//loader function to call api, params object is passed, params is automatically passed by the library
export const careerDetailsLoader = async( {params} ) => {
    const { id } = params; //destructure id from params object

    const res = await fetch('http://localhost:4000/careers/' + id);

    //this is for the sake of uploading to the site and not having to run the server
    if(!res){
        const localRes = await fetch('/assets/db.json');
        if(!localRes.ok){
            throw Error("Failed to find job requested.");
        }
        const dataJson = localRes.json();
        const career = dataJson.careers.find(career => career.id === id);
        return career;
    }

    //error handling
    if (!res.ok) {
        throw Error("Failed to find job requested.");
    }

    return res.json();
}