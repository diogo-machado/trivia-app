import React from 'react'
import { useHistory } from 'react-router-dom';
import Btn from '../../components/Btn';
import Label from '../../components/Label';
import Main from '../../components/Main';
import Title from '../../components/Title';
import ScoreBox from './styles'

function Score({score,setScore}){
    const history = useHistory();

    const handleNewGame = () => {
        setScore(0);
        history.push({
            pathname:'/',
        })
    }

    return (
        <Main>
            <Title>Score</Title>
            <ScoreBox>
                <Label>Final Score</Label>
                <Label>{`${score}/10`}</Label>
                <Btn onClick={handleNewGame}>Play Again</Btn>
            </ScoreBox>
        </Main>
    )
}

export default Score;