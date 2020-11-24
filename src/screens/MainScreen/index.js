import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Btn from '../../components/Btn'
import FormChoices from '../../components/FormChoices'
import Label from '../../components/Label'
import SelectInput from '../../components/SelectInput'
import Title from '../../components/Title'

function MainScreen(){
    const history = useHistory() 

    const [category,setCategory] = useState("18");
    const [difficulty,setDifficulty] = useState("easy");

    const handleClick = (e) => {
        e.preventDefault();
        history.push({
            pathname:'/trivia',
            state:{
                category,
                difficulty
            }
        });
        
    }

    const handleCategory = (e) => {
        setCategory(e.target.value)
    }

    const handleDifficulty = (e) => {
        setDifficulty(e.target.value)
    }

    return (
        <>
            <Title>Trivia Game</Title>
            <FormChoices width="600px" heigth="420px">
                <Label>Select category:</Label>
                <SelectInput value={category} onChange={handleCategory}>
                    <option value="18">Computers</option>
                    <option value="15">Video Games</option>
                    <option value="12">Music</option>
                    <option value="21">Sports</option>
                    <option value="11">Films</option>
                    <option value="27">Animals</option>
                </SelectInput>

                <Label>Select difficulty:</Label>
                <SelectInput value={difficulty} onChange={handleDifficulty}>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </SelectInput>

                <Btn onClick={handleClick}>Start</Btn>
            </FormChoices>
        </>
    )
}

export default MainScreen