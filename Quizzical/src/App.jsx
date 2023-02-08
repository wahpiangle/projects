import './App.css'
import React from 'react';
import Quiz from './components/Quiz';
import Start from './components/Start';

function App() {
  const [results, setResults] = React.useState();
  const [startQuiz, setStartQuiz] = React.useState(false);

  React.useEffect(() => {
    fetch('https://the-trivia-api.com/api/questions?limit=20', {
    headers: {
      'Content-Type': 'application/json'
    }})
    .then(response => response.json())
    .then(data => setResults(data))
  },[])

  console.log(results)

  function startQuizButton(){
    setStartQuiz(state => !state)
  }

  return (
    <div className="App">
      <div className="circle"></div>
      {!startQuiz && <Start startQuizButton ={startQuizButton}/>}
      {startQuiz && <Quiz />}
      <div className="oval"></div>
    </div>
  )
}

export default App
