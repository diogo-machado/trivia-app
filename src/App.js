import Box from './components/Box'
import FormSignupLogin from './components/FormSignupLogin'
import Main from './components/Main'
import Title from './components/Title'
import Label from './components/Label'
import SelectInput from './components/SelectInput'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <Main>
      <Title>Trivia Game</Title>
      <FormSignupLogin>
        <Label>Select category:</Label>
        <SelectInput>

        </SelectInput>
        
        <Label>Select difficulty:</Label>
        <SelectInput>

        </SelectInput>
      </FormSignupLogin>
    </Main>
  );
}

export default App;
