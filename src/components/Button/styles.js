import styled from "styled-components/macro";
import colors from "../../theme/colors";

export const StyledButton = styled.button`
    cursor: pointer;
    width: ${props => props.width};
    height: 48px;
    border-radius: 50px;
    background-color: ${props => props.outline ? colors.white : colors.green}; 
    border: ${props => props.outline ? `2px solid ${colors.green}` : "none"};
    color: ${props => props.outline ? colors.green : colors.white}; 
    font-family: Manrope;
    font-weight: bold;
    line-height: 24px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    opacity: 1;
    :hover {
        opacity: 0.5;
        transition: opacity 0.3s;
    }
    p {
        :first-child:nth-last-child(2),
        :first-child:nth-last-child(2) ~ p {
            margin-right: 5px;
        }
    }
`