import React, { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Questionaire from './components/Questionaire';

function TriviaScreen(){

    const API_URL = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple'
    let location = useLocation();
    
    // useEffect(()=>{
    //     alert(location.state.detail)
    // },[location])
    const [questions,setQuestions] = useState([])
    const [currentIndex,setCurrentIndex] = useState(0)
    const [score,setScore] = useState(0)
    const [showAnswers,setShowAnswers] = useState(false)


    useEffect(()=>{
        fetch(API_URL)
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
      },[]);
    
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
      <h1 className="text-3xl text-white font-bold">
        Game ended! Your score is: {score}
      </h1>
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
        <h2 className="text-2xl text-white font-bold">Loading data ...</h2>
      )
}

export default TriviaScreen;