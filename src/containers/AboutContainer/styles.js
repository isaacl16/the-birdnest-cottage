import styled from "styled-components/macro";
import breakpoints from "../../theme/breakpoints";
import colors from "../../theme/colors";

export const StyledWrapper = styled.div`
    background-color: ${colors.lightGreen};
    padding: 10%;
    text-align: start;
`

export const StyledHeader = styled.div`
    width: 100%;
    max-width: ${breakpoints.xl};
    margin: 30px auto;
    font-weight: bold;
    @media (max-width: ${breakpoints.sm}) {
        width: 100%;
        padding: 0;
    }
    opacity: ${({ animate }) => (animate ? "1" : "0")};
    transition: opacity 1s;

`

export const StyledContainer = styled.div`
    width: 100%;
    max-width: ${breakpoints.xl};
    margin: 30px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: ${breakpoints.md}) {
        flex-direction: column-reverse
    }
    @media (max-width: ${breakpoints.sm}) {
        width: 100%;
    }
    opacity: ${({ animate }) => (animate ? "1" : "0")};
    transition: opacity 1s;
`
export const StyledChild = styled.div`
    width: 48%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: ${breakpoints.md}){
        margin: 20px auto 0 auto;
        width: 100%;
    }
    @media (max-width: ${breakpoints.sm}){
        margin: 20px auto 0 auto;
        padding: 0;
    }
`

export const StyledIconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin-top: 20px;
    img {
        margin-right: 20px;
    }
`

export const StyledImage = styled.img`
    width: 100%;
    height: auto;
`

export const StyledIcon = styled.div`
    color: ${colors.white};
    margin: 20px 20px 0 0;
    width: 32px;
    height: 32px;
    background-image: url('/icons/${props => props.icon}.png')
`