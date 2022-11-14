import styled from "styled-components/macro";
import breakpoints from "../../theme/breakpoints";
import colors from "../../theme/colors";

export const StyledWrapper = styled.div`
    height: 100px;
    display: flex;
    box-sizing: border-box;
    width 100%;
    top: 0;
    padding: 0 100px;
    background-color: ${colors.white};
    position: fixed;
    box-shadow: 1px 1px #e6e6e6;
    @media (max-width: ${breakpoints.md}) {
        padding: 0 30px 0 30px;
    }
`

export const StyledLogo = styled.div`
    margin-right: auto;
    height: 100px;
    width: 113px;
    background-image: url('/assets/logo.png');
`