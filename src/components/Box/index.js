// import styled from 'styled-components';

// const Box = styled.div`
//     width: 300px;
//     height: 300px;
//     background-color: #1E1E1E;
//     border: 5px solid #fff;
//     box-shadow: 10px 10px 0px #000000;
// `;

// export default Box;
import styled from 'styled-components'

const Box = styled.div.attrs(props => ({
    width: props.width || "300px",
    heigth: props.heigth || "300px",
}))`
    width: ${props => props.width};
    height: ${props => props.heigth};
    background-color: #1E1E1E;
    border: 5px solid #fff;
    box-shadow: 10px 10px 0px #000000;
`;

export default Box