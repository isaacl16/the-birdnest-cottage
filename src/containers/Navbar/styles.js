import styled, { css } from "styled-components/macro";
import colors from "../../theme/colors";

const activeStyle = (props) => css`
    font-weight: ${props => props.isActive ? 'bold' : 'normal'};
    color: ${props => props.isActive ? colors.green : colors.grey};
`

export const StyledNav = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    list-style: none;
    margin-left: auto;
    font-family: TrajanusBricks;
`

export const StyledNavItem = styled.li`
    padding-left: 1rem; 
    :hover {
        cursor: pointer;
    }
    span {
        ${activeStyle(props => props.isActive)}
    }
`