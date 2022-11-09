import styled from "styled-components/macro";
import colors from "../../theme/colors";

export const StyledWrapper = styled.div`
    height: 100px;
    display: flex;
    top: 0;
    padding: 0 100px;
    background-color: ${colors.white};
    position: sticky;
    box-shadow: 1px 1px #e6e6e6;
    @media (max-width: 1024px) {
        padding: 0 30px 0 30px;
    }
`

export const StyledLogo = styled.div`
    margin-right: auto;
    height: 100px;
    width: 113px;
    background-image: url('/assets/logo.png');
`