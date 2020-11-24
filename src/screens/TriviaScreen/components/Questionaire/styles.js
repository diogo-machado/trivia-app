import styled from 'styled-components'

const QuestionaireBox = styled.div.attrs(props => ({
    width: props.width || "300px",
    heigth: props.heigth || "300px",
}))`
    width: ${props => props.width};
    height: ${props => props.heigth};
    background-color: #1E1E1E;
    border: 5px solid #fff;
    box-shadow: 10px 10px 0px #000000;

    display: flex;
    flex-direction: column;

    @media(max-width: 769px) {
        width: 350px;
    }
        
`;

const  QuestionBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: #F4F4F4;
    min-height: 50px;
    padding: 18px;
    margin: 23px 20px;
`;

const AnswersBox = styled.div`
    flex: 1;
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: wrap;

    @media(max-width: 426px) {
        border: 1px solid yellow;
    }
    
`;

const Button = styled.button.attrs(props=>({
    color: props.color || "#000000"
}))`
    font-family: "Press Start 2P", cursive;
    color: ${props => props.color};
    background-color: #F4F4F4;
    cursor: pointer;
    min-height: 75px;
    padding: 18px;
    flex: 1;
    flex-basis: 40%;
    margin: 0 20px;
    
    @media(max-width: 800px) {
        width: 75%;
    }
`;

const NextBox = styled.div`
    border: 1px solid green;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const NextButton = styled.button`
    font-family: "Press Start 2P", cursive;
    background-color: #E5E5E5;
    cursor: pointer;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export {QuestionaireBox,QuestionBox,AnswersBox,Button,NextBox,NextButton}