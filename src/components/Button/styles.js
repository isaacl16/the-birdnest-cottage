import styled from "styled-components/macro";
import colors from "../../theme/colors";

export const StyledButton = styled.button`
    width: ${props => props.width};
    height: 48px;
    border-radius: 50px;
    background-color: ${props => props.outline ? colors.white : colors.green}; 
    border: ${props => props.outline ? `2px solid ${colors.green}` : "none"};
    color: ${props => props.outline ? colors.green : colors.white}; 
    line-height: 24px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    div {
        margin-left: 5px;
    }
`