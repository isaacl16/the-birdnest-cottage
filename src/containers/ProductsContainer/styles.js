import styled from "styled-components/macro";
import breakpoints from "../../theme/breakpoints";
import colors from "../../theme/colors";

export const StyledWrapper = styled.div`
    min-height: 80vh;
    padding: 10%;
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
export const StyledTitle = styled.p`
    color: ${colors.gold};
    font-weight: bold;
`
export const StyledDescription = styled.div`
    min-height: 160px;
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
export const StyledColumn = styled.div`
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
