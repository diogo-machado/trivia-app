import React from 'react'
import {AnswersBox, Button, NextBox, NextButton, QuestionaireBox, QuestionBox} from './styles'

const Questionaire = ({
    handleAnswer,
    handleNextQuestion,
    data:{question,correct_answer,answers},
    showAnswers
    }) => {
  

    return (
        <QuestionaireBox width="780px" heigth="520px">
            <QuestionBox dangerouslySetInnerHTML={{__html:question}} />
            <AnswersBox>
                {answers.map((answer,idx)=>{
                    const textColor = showAnswers ? answer === correct_answer ? '#0EB61F' : '#DF3009' : '#000000'
                    return (
                        <Button
                            key={idx}
                            color={textColor}
                            onClick={()=>handleAnswer(answer)}
                            dangerouslySetInnerHTML={{__html:answer}}
                        />
                    )
                })}
            </AnswersBox>
            <NextBox>
            {showAnswers && (
                <NextButton onClick={handleNextQuestion}>
                    Next Question
                </NextButton>
            )}
            </NextBox>
        </QuestionaireBox>
    )
}

export default Questionaire