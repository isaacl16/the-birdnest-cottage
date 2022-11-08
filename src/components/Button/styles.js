import styled from "styled-components/macro";
import colors from "../../theme/colors";

export const StyledButton = styled.button`
    width: 240px;
    height: 48px;
    border-radius: 50px;
    background-color: ${colors.green}; 
    border: none;
    line-height: 24px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    div {
        margin-left: 5px;
    }
    p {
        color: ${colors.white}
    }
`