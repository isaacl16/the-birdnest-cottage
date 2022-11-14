import styled from "styled-components/macro";
import breakpoints from "../../theme/breakpoints";
import colors from "../../theme/colors";

export const StyledWrapper = styled.div`
    background-color: ${colors.lightGreen};
    padding: 10%;
    text-align: start;
`

export const StyledHeader = styled.div`
    width: 80%;
    max-width: 1100px;
    margin: 30px auto;
    padding-left: 40px;
    @media (max-width: ${breakpoints.sm}) {
        width: 100%;
        padding: 0;
    }
`

export const StyledContainer = styled.div`
    width: 80%;
    max-width: 1100px;
    margin: 30px auto;
    display: flex;
    flex-direction: row;
    @media (max-width: ${breakpoints.md}) {
        flex-direction: column-reverse
    }
    @media (max-width: ${breakpoints.sm}) {
        width: 100%;
    }
`
export const StyledChild = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
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
    div {
        margin-right: 20px;
    }
`

export const StyledImage = styled.div`
    width: 100%;
    height: 100%;
    min-height: 300px;
    background-image: url('/assets/about.png');
    background-size: cover;
`

export const StyledIcon = styled.div`
    color: ${colors.white};
    margin: 20px 20px 0 0;
    width: 32px;
    height: 32px;
    background-image: url('/icons/${props => props.icon}.png')
`