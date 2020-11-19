import styled from 'styled-components';
import Box from '../Box';

const FormSignupLogin = styled(Box).attrs({as:'form'})`
    width: 600px;
    height: 420px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export default FormSignupLogin;