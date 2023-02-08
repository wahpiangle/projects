import React from 'react';
import Die from './Die';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';

export default function App() {
    const [diceArray, setDiceArray] = React.useState(allNewDice);
    const [tenzies, setTenzies] = React.useState(false);

    //useEffect to check whether game is won
    React.useEffect(() => {
        const allHeld = diceArray.every(die => die.isHeld);
        const firstValue = diceArray[0].value;
        const sameValue = diceArray.every(die => die.value === firstValue);
        if(sameValue && allHeld){
            setTenzies(true);
        }
        }, diceArray)

    //generate dice array on page load
    function allNewDice() {
        const newDiceArray = [];
        for (let i = 0; i < 10; i++) {
            newDiceArray.push(generateDie())
        }
        return newDiceArray
    }

    //function to generate individual dies
    function generateDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }

    //function to roll the dice that checks whether the die is held, and check for game won
    function rollDice() {
        if(tenzies){
            setDiceArray(allNewDice);
            setTenzies(false);
        }else{
        setDiceArray(oldDice => oldDice.map(die => {
            return die.isHeld ? die : generateDie()
        }))}
    }

    //function that holds the number of dice when the dice is clicked
    function holdDice(id) {
        setDiceArray(oldDice => oldDice.map(die => {
            return die.id === id ? { ...die, isHeld: !die.isHeld } : die
        }))
    }

    //use of anonymous function here so that holdDice is only called onclick not on render
    const dieElements = diceArray.map(die =>
        <Die number={die.value} id={die.id} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />
    );

    return (
        <main>
            {/*Render confetti when game is won*/}
            {tenzies && <Confetti/>}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className='die-container'>
                {dieElements}
            </div>
            <button className='roll-button' onClick={rollDice}>{tenzies? "New Game" : "Roll"}</button>
        </main>
    )
}