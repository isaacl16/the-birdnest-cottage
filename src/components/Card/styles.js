import styled from "styled-components/macro";
import breakpoints from "../../theme/breakpoints";
import colors from "../../theme/colors";

export const StyledTitle = styled.p`
    color: ${colors.gold};
    font-weight: bold;
`
export const StyledDescription = styled.div`
    min-height: 160px;
`

export const StyledWrapper = styled.div`
    margin-top: 20px;
    width: 30%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    @media (max-width: ${breakpoints.md}){
        width: 45%;
    }
    @media (max-width: ${breakpoints.sm}){
        margin: 40px auto;
        padding: 0;
        width: 100%;
    }
`

export const StyledImage = styled.img`
    width: 100%;
    heigh: auto;
    transition: 0.3s;
    margin-bottom: 12px;
    :hover {
        transform: scale(1.1);
    }
`