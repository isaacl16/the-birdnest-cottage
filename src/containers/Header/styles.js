import styled from "styled-components/macro";
import breakpoints from "../../theme/breakpoints";
import colors from "../../theme/colors";

export const StyledWrapper = styled.div`
    height: 100px;
    display: flex;
    box-sizing: border-box;
    width 100%;
    top: 0;
    padding: 0 150px;
    background-color: ${colors.white};
    position: fixed;
    box-shadow: 1px 1px #e6e6e6;
    @media (max-width: ${breakpoints.lg}) {
        padding: 0 40px 0 16px;
    }
    @media (max-width: ${breakpoints.md}) {
        padding: 0 20px 0 8px;
    }
    z-index: 1;
`

export const StyledLogo = styled.img`
    margin-right: auto;
    height: auto%;
    width: 113px;
`