import styled, { css } from "styled-components/macro";
import colors from "../../theme/colors";

const activeStyle = () => css`
    font-weight: bold;
    color: ${colors.green};
`

export const StyledNav = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    list-style: none;
    margin-left: auto;
    font-family: TrajanusBricks;
    a.active {
        ${activeStyle()}
    }
`

export const StyledNavItem = styled.li`
    padding-left: 1rem; 
`