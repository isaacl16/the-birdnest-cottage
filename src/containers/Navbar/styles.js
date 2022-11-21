import styled, { css } from "styled-components/macro";
import colors from "../../theme/colors";

const activeStyle = (props) => css`
    color: ${props => props.isActive ? colors.green : colors.grey};
`

export const StyledBackground = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 5;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
`

export const StyledNav = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    list-style: none;
    margin-left: auto;
    background-color: rgba(255, 255, 255, 0);
    padding: 0;
    z-index: 1;
    @media (max-width: 480px) {
        position: absolute;
        right: -50vw;
        transition: transform 0.5s;
        transform: ${props => props.active ? 'translateX(-50vw)' : 'translateX(50vw)'};
        justify-content: start;
        align-items: start;
        height: 100vh;
        width: 50vw;
        flex-direction: column;
        background-color: white;
        margin: 0;
        box-shadow: 0 0 3px 2px #B3B3B3;
        padding-top: 30px;
        z-index: 10;
        li {
            padding: 20px 20px;
        }
        div {
            align-self: end;
            margin-right: 10px;
            margin-bottom: 20px;
        }

    }
`

export const StyledContainer = styled.div`
    display: flex;
    align-items: center;
`

export const StyledNavItem = styled.li`
    padding-left: 1rem; 
    opacity: 1;
    :first-child {
        padding: 0;
    }
    :hover {
        opacity: 0.5;
        transition: opacity 0.3s;
        cursor: pointer;
    }
    p {
        margin: 0;
    }
    ${activeStyle(props => props.isActive)}
`