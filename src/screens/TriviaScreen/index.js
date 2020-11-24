import React, { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Questionaire from './components/Questionaire';
import ScoreScreen from '../ScoreScreen/index'
import Label from '../../components/Label';

function TriviaScreen(){

    let location = useLocation();
    
    const [questions,setQuestions] = useState([])
    const [currentIndex,setCurrentIndex] = useState(0)
    const [score,setScore] = useState(0)
    const [showAnswers,setShowAnswers] = useState(false)


    useEffect(()=>{
      const category = location.state.category
      const difficulty = location.state.difficulty
        fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`)
        .then(res=>res.json())
        .then(data=>{
          const questions = data.results.map((question)=>
          ({
            ...question,
            answers:[
              question.correct_answer,
              ...question.incorrect_answers
            ].sort(()=>Math.random() - 0.5)
          }))
          setQuestions(questions)
        });
      },[location.state.category, location.state.difficulty]);
    
      const handleAnswer = (answer) => {
        
        if(!showAnswers){
          if(answer === questions[currentIndex].correct_answer){
            setScore(score + 1)
          }
        }
    
    
        setShowAnswers(true)
    
        // const newIndex = currentIndex + 1
        // setCurrentIndex(newIndex)
    
      }
    
      const handleNextQuestion = () => {
        setCurrentIndex(currentIndex + 1)
        setShowAnswers(false)
      }

      return questions.length > 0 ? (
        <div className="container">
          {currentIndex >= questions.length ? (
            <ScoreScreen score={score} setScore={setScore} />
    ) : (
      <Questionaire
        data={questions[currentIndex]} 
        handleAnswer={handleAnswer}
        handleNextQuestion = {handleNextQuestion} 
        showAnswers = {showAnswers}
      />
    )}
          
        </div>
      ):(
        <Label>Loading data...</Label>
      )
}

export default TriviaScreen;