import styled from 'styled-components';
import Box from '../Box';

const FormChoices = styled(Box).attrs({as:'form'})`
    /* width: 600px;
    height: 420px; */

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media(max-width: 800px) {
        width: 350px;

    }

`;

export default FormChoices;