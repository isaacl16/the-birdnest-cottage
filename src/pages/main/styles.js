import styled from "styled-components/macro";
import breakpoints from "../../theme/breakpoints";

export const StyledLayout = styled.div`
    width: 100%;
    margin: 0 auto;
`


export const StyledBackground = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 5;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
`

export const StyledContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    background-color: rgba(255, 255, 255, 1);
    transform: translate(-50%, -50%);
    z-index: 10;
    max-width: ${breakpoints.lg};
    width: 80%;
    box-shadow: 0 0 6px 4px #B3B3B3;
`