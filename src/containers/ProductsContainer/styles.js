import styled from "styled-components/macro";
import breakpoints from "../../theme/breakpoints";

export const StyledWrapper = styled.div`
    padding: 10%;
    opacity: ${({ animate }) => (animate ? "1" : "0")};
    transition: opacity 1s;
`

export const StyledHeader = styled.div`
    width: 100%;
    max-width: ${breakpoints.xl};
    text-align: start;
    margin: 30px auto;
    @media (max-width: ${breakpoints.sm}){
        padding: 0px;
        width: 100%;
    }
    h1{
        font-weight: bold;
    }
`

export const StyledContainer = styled.div`
    width: 100%;
    max-width: ${breakpoints.xl};
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: start;
    justify-content: space-between;
    margin: 0 auto;
    @media (max-width: ${breakpoints.sm}){
        width: 100%;
    }
`

