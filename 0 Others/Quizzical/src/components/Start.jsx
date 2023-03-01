import React from "react";
import './Start.css'

export default function Start(props){
    return(
        <div className="start">
            <div className="start-title">Quizzical</div>
            <button onClick={props.startQuizButton} className="start-button">Start Quiz</button>
        </div>
    )
}