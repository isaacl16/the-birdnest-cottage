import styled, { css } from "styled-components/macro";

const activeStyle = () => css`
    font-weight: bold;
`

export const StyledNav = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    list-style: none;
    margin-left: auto;
    a.active {
        ${activeStyle()}
    }
`

export const StyledNavItem = styled.li`
    padding-left: 1rem;
`